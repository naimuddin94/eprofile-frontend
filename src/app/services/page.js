import Container from "@/components/share/Container";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import user1 from "../../assets/profiles/men.png";
import men from "../../assets/profiles/sm.png";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import Link from "next/link";
import Ratings from "@/components/Ratings/Ratings";

const Services = ({ title }) => {
  return (
    <div>
      <Container>
        <header className="py-5 lg:py-10">
          <div className="flex items-center justify-between flex-wrap">
            <div>
              <select defaultValue={'lth'} className="mx-auto py-[6px] border outline-none text-center px-4 rounded-md border-[#000000]">
                <option selected value="">
                  Sort by
                </option>
                <option value="lth">Low to High</option>
                <option value="">High to Low</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-6">
                <div className="h-8 w-8 border shadow-lg bg-[#ffffff] rounded-full">
                  <IoSearchOutline className="mx-auto mt-[6px] text-xl" />
                </div>
                <select defaultValue='lth' className="mx-auto py-[6px] border outline-none text-center px-4 rounded-md border-[#000000]">
                  <option selected value="">
                    Filter
                  </option>
                  <option value="lth">Low to High</option>
                  <option value="">High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <main className="mb-7">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, i) => (
                <div key={i} className="cursor-pointer">
                  <div className="">
                    <Image
                      className=" rounded-md w-full"
                      src={user1}
                      height={120}
                      width={150}
                      alt="user"
                    />
                  </div>
                  <Link href="/single-services">
                    {" "}
                    <div className="space-y-1 pt-3  py-1">
                      <div className="flex mb-2 items-center gap-3">
                        <Image
                          className="rounded-full border"
                          src={men}
                          height={40}
                          width={40}
                          alt="user"
                        />
                        <h2 className="font-bold text-[16px] text-[#000000]">
                          Robert D. Caldwell
                        </h2>
                      </div>
                      <p className="font-medium text-[15px] text-[#000000]">
                        I will be full stack web and software developer build
                        applications
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-x-1">
                          <Ratings ratings={1} />
                        </div>

                        <p className="text-[#111111]">5.0</p>
                        <p className="text-slate-500">(65)</p>
                      </div>

                      <h4 className="font-semibold text-[16px] text-[#000000]">
                        From $185
                      </h4>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Services;
