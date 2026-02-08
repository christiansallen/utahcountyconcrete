import { useState } from "react";
import { heroImage } from "../assets/images";

const COST_PER_SQFT = 12;

export default function EstimateCalculator() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const sqft = width && length ? Number(width) * Number(length) : 0;
  const estimate = sqft > 0 ? Math.round(sqft * COST_PER_SQFT) : 0;

  return (
    <section className="px-2">
      {/* Calculator Card */}
      <div className="relative rounded-xl overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 px-4 py-12 flex flex-col gap-8">
          {/* Yellow Accent Bar + Title */}
          <div className="flex flex-col gap-2">
            <div className="w-9 h-1 bg-yellow rounded-full" />
            <h2 className="text-[20px] font-extrabold uppercase text-white tracking-tight leading-none">
              ESTIMATE<br />CALCULATOR
            </h2>
          </div>

          {/* Input Row + Buttons */}
          <div className="flex flex-col gap-4">
            {/* Inputs Row */}
            <div className="flex items-end gap-3">
              {/* Width */}
              <div className="flex-1">
                <label className="block text-[14px] font-medium text-white/80 mb-1.5">Width</label>
                <input
                  type="number"
                  placeholder="0"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full bg-white border border-[#d5d7da] rounded-lg px-3 py-2 text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:border-yellow"
                />
                <span className="text-[11px] text-white/60 mt-1 block">ft</span>
              </div>

              {/* Length */}
              <div className="flex-1">
                <label className="block text-[14px] font-medium text-white/80 mb-1.5">Length</label>
                <input
                  type="number"
                  placeholder="0"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full bg-white border border-[#d5d7da] rounded-lg px-3 py-2 text-[16px] text-black placeholder:text-gray-400 focus:outline-none focus:border-yellow"
                />
                <span className="text-[11px] text-white/60 mt-1 block">ft</span>
              </div>

              {/* Equals */}
              <div className="flex items-center justify-center w-6 h-10 text-white/60 text-[18px] font-light shrink-0 mb-5">
                =
              </div>

              {/* Result */}
              <div className="flex-1">
                <label className="block text-[14px] font-medium text-white/80 mb-1.5">&nbsp;</label>
                <div className="w-full bg-white border border-[#d5d7da] rounded-lg px-3 py-2 text-[16px] text-black font-semibold min-h-[40px] flex items-center">
                  {estimate > 0 ? `$${estimate.toLocaleString()}` : "$"}
                </div>
                <span className="text-[11px] text-white/60 mt-1 block">&nbsp;</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black rounded-lg px-4 py-3 text-[14px] font-semibold border-2 border-white/12 hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                </svg>
                Schedule Visit
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-3 text-[14px] font-semibold border-2 border-white/12 hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* In-card Disclaimer */}
          <p className="text-[12px] font-light text-white/60 text-center">
            Free on-site visit, measure and confirm quote.
          </p>
        </div>
      </div>

      {/* Below-card disclaimer */}
      <p className="text-[12px] font-light text-gray-500 mt-3 px-2 leading-[1.2] text-center">
        *Estimates are subject to vary based on material amount, cost, stamping or other aesthetic treatments.
      </p>
    </section>
  );
}
