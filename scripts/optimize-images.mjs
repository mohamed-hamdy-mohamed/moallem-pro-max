/**
 * Asset pipeline: true transparency + compression (keeps filenames).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();

function removeEdgeBackground(rgba, width, height, options = {}) {
  const {
    bgMin = 236,
    colorDelta = 16,
    fringeLuma = 248,
  } = options;

  const n = width * height;
  const bg = new Uint8Array(n);
  const queue = new Int32Array(n);
  let qh = 0;
  let qt = 0;

  const isNearWhite = (p, minLuma = bgMin) => {
    const o = p * 4;
    const r = rgba[o];
    const g = rgba[o + 1];
    const b = rgba[o + 2];
    if (r < minLuma || g < minLuma || b < minLuma) return false;
    return (
      Math.abs(r - g) <= colorDelta &&
      Math.abs(g - b) <= colorDelta &&
      Math.abs(r - b) <= colorDelta
    );
  };

  const enqueue = (p) => {
    if (p < 0 || p >= n || bg[p] || !isNearWhite(p)) return;
    bg[p] = 1;
    queue[qt++] = p;
  };

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (qh < qt) {
    const p = queue[qh++];
    const x = p % width;
    const y = (p / width) | 0;
    if (x > 0) enqueue(p - 1);
    if (x + 1 < width) enqueue(p + 1);
    if (y > 0) enqueue(p - width);
    if (y + 1 < height) enqueue(p + width);
  }

  // One-pixel fringe cleanup around background (anti-alias only)
  const fringe = new Uint8Array(n);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (bg[p]) continue;
      const touchesBg =
        (x > 0 && bg[p - 1]) ||
        (x + 1 < width && bg[p + 1]) ||
        (y > 0 && bg[p - width]) ||
        (y + 1 < height && bg[p + width]);
      if (touchesBg && isNearWhite(p, fringeLuma - 8)) fringe[p] = 1;
    }
  }

  for (let p = 0; p < n; p++) {
    const o = p * 4;
    if (bg[p]) {
      rgba[o + 3] = 0;
      continue;
    }
    if (fringe[p]) {
      // Soften edge: alpha from distance to pure white
      const r = rgba[o];
      const g = rgba[o + 1];
      const b = rgba[o + 2];
      const luma = (r + g + b) / 3;
      const alpha = Math.round(Math.max(0, Math.min(255, (255 - luma) * 8)));
      if (alpha < 12) {
        rgba[o + 3] = 0;
      } else {
        // Keep original color, just reduce alpha to kill white halo
        rgba[o + 3] = alpha;
      }
      continue;
    }

    // Soft drop-shadows connected to bg: light gray pixels touching bg ring
    const x = p % width;
    const y = (p / width) | 0;
    const touchesBg =
      (x > 0 && bg[p - 1]) ||
      (x + 1 < width && bg[p + 1]) ||
      (y > 0 && bg[p - width]) ||
      (y + 1 < height && bg[p + width]) ||
      (x > 1 && bg[p - 2]) ||
      (x + 2 < width && bg[p + 2]) ||
      (y > 1 && bg[p - width * 2]) ||
      (y + 2 < height && bg[p + width * 2]);

    if (touchesBg) {
      const r = rgba[o];
      const g = rgba[o + 1];
      const b = rgba[o + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const luma = (r + g + b) / 3;
      const sat = max - min;
      // Only convert pale gray shadow blobs near the outer background
      if (luma >= 210 && luma < 250 && sat <= 18) {
        const strength = (250 - luma) / 40;
        const alpha = Math.round(Math.min(120, strength * 160));
        if (alpha < 10) {
          rgba[o + 3] = 0;
        } else {
          rgba[o] = 15;
          rgba[o + 1] = 35;
          rgba[o + 2] = 72;
          rgba[o + 3] = alpha;
        }
      }
    }

    if (rgba[o + 3] === 0) rgba[o + 3] = 255;
  }
}

async function loadRgba(filePath) {
  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data: Buffer.from(data), width: info.width, height: info.height };
}

async function encodePng(filePath, pipelineOpts = {}) {
  const { maxWidth } = pipelineOpts;
  let img = sharp(filePath).ensureAlpha();
  const meta = await img.metadata();
  if (maxWidth && meta.width && meta.width > maxWidth) {
    img = img.resize({
      width: maxWidth,
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    });
  }
  const out = await img
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      palette: false,
    })
    .toBuffer();
  fs.writeFileSync(filePath, out);
  const m = await sharp(filePath).metadata();
  return {
    bytes: out.length,
    width: m.width,
    height: m.height,
    alpha: Boolean(m.hasAlpha),
  };
}

async function processBgRemove(filePath, opts = {}) {
  const { data, width, height } = await loadRgba(filePath);
  removeEdgeBackground(data, width, height, opts.bg);
  // Write raw then re-encode via sharp for resize/compress
  const tmp = filePath + ".tmp.png";
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(tmp);
  fs.renameSync(tmp, filePath);
  return encodePng(filePath, opts);
}

function kb(n) {
  return `${Math.round(n / 1024)} KB`;
}

async function main() {
  const jobs = [
    {
      file: "src/assets/SocialMedia.png",
      kind: "bg",
      maxWidth: 1200,
      bg: { bgMin: 230, colorDelta: 18, fringeLuma: 246 },
    },
    {
      file: "src/assets/LaptopImage2.png",
      kind: "bg",
      maxWidth: 1200,
      bg: { bgMin: 240, colorDelta: 14, fringeLuma: 248 },
    },
    { file: "src/assets/LaptopImg.png", kind: "opt", maxWidth: 900 },
    { file: "src/assets/Training_Laptop.png", kind: "opt", maxWidth: 1200 },
    { file: "src/assets/logo.png", kind: "opt", maxWidth: 512 },
    { file: "public/logo.png", kind: "opt", maxWidth: 512 },
  ];

  for (const job of jobs) {
    const abs = path.join(ROOT, job.file);
    if (!fs.existsSync(abs)) continue;
    const before = fs.statSync(abs).size;
    const result =
      job.kind === "bg"
        ? await processBgRemove(abs, job)
        : await encodePng(abs, job);
    console.log(
      `${job.file}: ${kb(before)} → ${kb(result.bytes)} (${result.width}x${result.height}, alpha=${result.alpha})`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
