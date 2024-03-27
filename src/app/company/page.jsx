import Container from "@/components/Container";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import card from "../../assets/companies/card.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineCurrencyEuro } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import Ratings from "@/components/Ratings/Ratings";

const Company = () => {
  return (
    <div>
      <Container>
        {/* header - filtering */}
        <header className="py-5 lg:py-10">
          <div className="flex items-center justify-between flex-wrap">
            <div>
              <select className="mx-auto py-[6px] border outline-none text-center px-4 rounded-md border-[#000000]">
                <option selected value="">
                  Sort by
                </option>
                <option value="">Low to High</option>
                <option value="">High to Low</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-6">
                <div className="h-8 w-8 border shadow-lg bg-[#ffffff] rounded-full">
                  <IoSearchOutline className="mx-auto mt-[6px] text-xl" />
                </div>
                <select className="mx-auto py-[6px] border outline-none text-center px-4 rounded-md border-[#000000]">
                  <option selected value="">
                    Filter
                  </option>
                  <option value="">Low to High</option>
                  <option value="">High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* card */}
        <main className="mb-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item, i) => (
                <div key={i} className="border  boder-[#111111] ">
                  <div className="flex flex-wrap justify-between  p-4 border-[#111111] pb-3 border-b">
                    <div className="flex flex-wrap gap-3">
                      <Image
                        className="rounded-md"
                        src={card}
                        height={20}
                        width={90}
                        alt="card"
                      />

                      <div className="space-y-1">
                        <h3 className="text-[#111111] text-[23px]">
                          Sapphire Software Solutions
                        </h3>
                        <p className="text-[14px] text-slate-500 font-normal">
                          Leading USA App Development Company
                        </p>
                        <div className="flex items-center gap-x-3">
                          <div className="flex items-center gap-x-1">
                            <Ratings ratings={5}/>
                          </div>
                          <p className="text-primary flex items-center gap-2 text-[14px] font-medium">
                            200+ review <FaAngleRight />
                          </p>
                        </div>

                        <div className="pt-1">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              {" "}
                              <HiOutlineCurrencyEuro className="text-[16px] " />
                              <p className="text-[#111111] text-[15px] font-medium ">
                                N/A
                              </p>
                            </div>

                            <div className="flex items-center gap-1">
                              {" "}
                              <FaUserFriends className="text-[16px] " />
                              <p className="text-[#111111] text-[15px] font-medium ">
                                50
                              </p>
                            </div>

                            <div className="flex items-center gap-1">
                              {" "}
                              <CiCalendarDate className="text-[16px] " />
                              <p className="text-[#111111] text-[15px] font-medium">
                                2002
                              </p>
                            </div>

                            <div className="flex items-center gap-1">
                              {" "}
                              <IoLocationOutline className="text-[16px] " />
                              <p className="text-[#111111] text-[15px] font-medium">
                                Khulna -9100
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href="/">
                      <button className="bg-primary text-[14px] flex items-center gap-x-2 text-white px-4 py-2 rounded-md">
                        Visit Website <FaExternalLinkAlt />
                      </button>
                    </Link>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-[17px]">
                      Sapphire Solutions is an ISO 27001:2013 certified Web
                      Mobile App Development Company established in 2002. We
                      offer a wide range of IT services and domain-specific
                      solutions to Enterprises, ISVs, Digital Agencies, and
                      Startups.
                    </p>
                    <p className="font-bold text-[18px]">
                      Students and staff benefit from Sapphire custom data
                      delivery software.
                    </p>
                    <p className="font-bold text-[13px] ">
                      Students and staff benefit from Sapphire custom data
                      delivery software.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Company;
