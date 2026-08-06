import {
  PACKAGE_COLUMNS,
  PACKAGE_FEATURE_ROWS,
  PACKAGE_HEADER_ICONS,
} from "../../data/packagesData";
import StatusCell from "./StatusCell";

const FeatureIcon = PACKAGE_HEADER_ICONS.feature;
const TrainerIcon = PACKAGE_HEADER_ICONS.trainer;
const InstitutionsIcon = PACKAGE_HEADER_ICONS.institutions;

const FeaturesTable = () => (
  <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_40px_rgba(15,35,72,0.06)]">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-right">
        <thead>
          <tr>
            <th className="w-[36%] bg-[#0F2348] px-4 py-4 text-sm font-bold text-white sm:px-5 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <FeatureIcon className="h-4 w-4 text-[#FF7A00]" strokeWidth={2.2} />
                {PACKAGE_COLUMNS.feature}
              </span>
            </th>
            <th className="w-[32%] bg-[#FF7A00] px-4 py-4 text-sm font-bold text-white sm:px-5 sm:text-base">
              <span className="inline-flex items-center justify-center gap-2">
                <TrainerIcon className="h-4 w-4 text-white" strokeWidth={2.2} />
                {PACKAGE_COLUMNS.trainer}
              </span>
            </th>
            <th className="w-[32%] bg-[#0F2348] px-4 py-4 text-sm font-bold text-white sm:px-5 sm:text-base">
              <span className="inline-flex items-center justify-center gap-2">
                <InstitutionsIcon className="h-4 w-4 text-white" strokeWidth={2.2} />
                {PACKAGE_COLUMNS.institutions}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {PACKAGE_FEATURE_ROWS.map((row, index) => {
            const Icon = row.icon;
            const striped = index % 2 === 0;

            return (
              <tr
                key={row.id}
                className={striped ? "bg-[#F1F5F9]/70" : "bg-white"}
              >
                <td className="border-t border-[#E2E8F0] px-4 py-3.5 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2348] shadow-sm">
                      <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-semibold text-[#0F2348] sm:text-[15px]">
                      {row.label}
                    </span>
                  </div>
                </td>
                <td className="border-t border-[#E2E8F0] px-3 py-3.5 sm:px-4 sm:py-4">
                  <StatusCell value={row.trainer} />
                </td>
                <td className="border-t border-[#E2E8F0] px-3 py-3.5 sm:px-4 sm:py-4">
                  <StatusCell value={row.institutions} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default FeaturesTable;
