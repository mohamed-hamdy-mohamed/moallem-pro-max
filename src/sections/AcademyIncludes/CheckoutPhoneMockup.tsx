import laptopImg from "../../assets/LaptopImg.png";
import { PHONE_MOCKUP } from "../../data/academyIncludesData";

const CheckoutPhoneMockup = () => (
  <div className="relative mx-auto w-[140px] rounded-[28px] border-[6px] border-[#0F2348] bg-white p-2 shadow-xl sm:w-[160px]">
    <div className="rounded-[20px] bg-[#F8FAFC] p-3">
      <div className="h-16 overflow-hidden rounded-xl">
        <img
          src={laptopImg}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
          aria-hidden="true"
        />
      </div>
      <p className="mt-2 text-[10px] font-bold text-[#0F2348]">{PHONE_MOCKUP.courseTitle}</p>
      <p className="text-[10px] text-[#64748B]">{PHONE_MOCKUP.courseSubtitle}</p>
      <div className="mt-2 rounded-lg bg-[#FF7A00] py-1.5 text-center text-[9px] font-bold text-white">
        {PHONE_MOCKUP.cta}
      </div>
    </div>
  </div>
);

export default CheckoutPhoneMockup;
