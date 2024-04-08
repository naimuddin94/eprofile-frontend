"use client"

import Container from "@/components/share/Container";
import React,{useEffect} from "react";
import { IoSearchOutline } from "react-icons/io5";
import user1 from "../../assets/profiles/user-1.png";
import user2 from "../../assets/profiles/user-2.png";
import user3 from "../../assets/profiles/user-3.png";
import user4 from "../../assets/profiles/user-4.png";
import user5 from "../../assets/profiles/user-5.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Ratings from "@/components/Ratings/Ratings";
import Link from "next/link";
import {axiosBase} from '@/hooks/axiosSecure'

const Profiles = () => {
  const [profiles, setProfiles] = React.useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
     const res= await axiosBase.get('/profile')

     setProfiles(res.data?.data)
    }

    fetchData()
  },[])
  return (
    <div>
      <Container>
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

        <main className="mb-7">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
            {profiles?.map(
              (item, i) => (
                <div key={i} className="border">
                  <div className="p-">
                    <div className="bg-[#F5F5F5]">
                      <Image
                        className="p-4 w-full h-[280px] object-contain"
                        src={item?.photo}
                        alt="Profile Photo"
                        width={100}
                        height={100}
                      />
                    </div>

                    <Link href={`/profiles/${item?.createdBy}`}>
                      {" "}
                      <div className="space-y-1 px-3 py-2">
                        <h2 className="font-bold text-[16px] text-[#000000]">
                          {item?.fullName}
                        </h2>
                        <h3 className="font-medium text-[15px] text-[#000000]">
                          {item?.title[0]?.designation|| "Designation"}
                        </h3>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-x-1">
                            <Ratings ratings={5} />
                          </div>
                          <p className="text-slate-500">(65)</p>
                        </div>
                      </div>
                    </Link>
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

export default Profiles;
