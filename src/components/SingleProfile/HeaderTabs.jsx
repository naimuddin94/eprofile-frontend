"use client";

import { useState } from "react";
import Introduction from "./Tabs/Introduction";
import Reviews from "./Tabs/Reviews";
import Contact from "./Tabs/Contact";
import Link from "next/link";

const HeaderTabs = () => {
  const [state, setState] = useState("introduction");

  return (
    <div>
      {/* tabs */}
      <div className=" max-w-xl mx-auto">
        <div className="flex flex-wrap gap- font-semibold -tracking-tighter cursor-pointer text-[#000000] text-[18px] lg:text-[19px] justify-between py-2 items-center text-enter ">
          <span
            className={`${
              state === "introduction"
                ? "text-primary border-b-2 border-primary py-1 duration-300"
                : ""
            }`}
            onClick={() => setState("introduction")}
          >
            Introduction
          </span>

          <Link href='/single-profiles'>
            <span>Products</span>
          </Link>

          <span
            className={`${
              state === "contact"
                ? "text-primary border-b-2 border-primary py-1 duration-300"
                : ""
            }`}
            onClick={() => setState("contact")}
          >
            Contact
          </span>

          <span
            className={`${
              state === "reviews"
                ? "text-primary border-b-2 border-primary py-1 inline-block duration-300"
                : ""
            }`}
            onClick={() => setState("reviews")}
          >
            Review
          </span>
        </div>
      </div>

      {/* tab content */}

      <div>
        {state === "introduction" && (
          <div className="py-3 ">
            <Introduction />
          </div>
        )}

        {state === "reviews" && (
          <div className="py-3 ">
            <Reviews />
          </div>
        )}

        {state === "contact" && (
          <div className="py-3 ">
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTabs;
