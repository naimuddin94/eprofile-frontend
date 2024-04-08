"use client"
// import logo from "../../assets/profiles/softronixs.jpeg";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Ratings from "@/components/Ratings/Ratings";
// import user1 from "../../assets/profiles/user-1.png";
import { useState, useEffect } from 'react'
import { axiosBase } from '@/hooks/axiosSecure'
import Container from "@/components/share/Container";

import HeaderTabs from "@/components/SingleProfile/HeaderTabs";

import MidTabs from "@/components/SingleProfile/MidTabs";
import SingleProfilesContact from "@/components/SingleProfile/SingleProfilesContact";
import ReviewSummary from "@/components/SingleProfile/ReviewSummary";
import { usePathname, useSearchParams } from "next/navigation";

const SingleProfile = ({ userId }) => {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    const fetchData = () => {

      axiosBase.get(`/profile/${userId}`).then((res) => {
        setProfile(res?.data?.data)
      })
    }
    fetchData()
  }, [])
  console.log(profile);
  return (
    <div>

      <div>
        <div className="px-6 border-b-2 relative md:px-14 lg:px-20 py-4 md:py-5 lg:py-7">
          <div
            className="bg-cover relative w-full bg-center h-[150px] md:h-[190px] lg:h-[220px] rounded-lg"
            style={{
              backgroundImage: `url('https://shorturl.at/suTZ2')`,
              backgroundSize: "cover",
            }}
          ></div>

          <div className=" flex flex-col lg:flex-row flex-wrap lg:pl-8 gap-3 lg:gap-5">
            <div className=" lg:w-[12%]  ">
              {/* <Image
                className="border-2 relative bottom-16 left-[30%] md:left-[40%] lg:left-0  shadow-md border-slate-300 rounded-full h-[120px] md:h-[150px] lg:h-[165px] w-[120px] md:w-[150px]  lg:w-[165px]"
                src={logo}
                height={80}
                width={120}
                alt="logo"
              /> */}
            </div>

            <div className="space-y-2 relative bottom-14  lg:bottom-0 w-[86%]  lg:mt-6">
              <div className="flex  justify-between items-center">
                <div className="flex items-center gap-2 lg:gap-4">
                  <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">
                    AllianceTek
                  </h2>
                  <span>
                    <GoVerified className="text-xl text-[#00A1FF]" />
                  </span>
                </div>

                <div className="flex flex-col">
                  <button className="px-4 py-2 rounded-md text-white bg-primary font-medium">
                    Visit website
                  </button>
                  <button className="absolute bottom-0 text-[18px] text-primary font-medium">
                    write a review
                  </button>
                </div>
              </div>

              <p className="text-slate-700 font-normal text-[20px]">
                Empowering IT Solutions
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1 items-center">
                  <Ratings ratings={5} />
                </div>
                <p className="text-slate-700 font-normal text-[18px]">
                  19 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        {/* headers tab */}
        <HeaderTabs />

        {/* founders */}

        <div className="py-3 mt-3">
          <h2 className="text-primary inline-block tracking-wide border-b-2 border-primary py-1 font-semibold text-xl">
            Founders/Key Executives
          </h2>

          <div className="grid py-3 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} className="border">
                <div className="p-">
                  <div className=" bg-[#F5F5F5]">
                    {/* <Image
                      className="p-4 w-full"
                      src={user1}
                      height={120}
                      width={150}
                      alt="user"
                    /> */}
                  </div>
                  <div className="space-y-1 px-3 py-2">
                    <h2 className="font-bold text-[16px] text-[#000000]">
                      Robert D. Caldwell
                    </h2>
                    <h3 className="font-medium text-[15px] text-[#000000]">
                      Graphics designer
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-x-1">
                        <Ratings ratings={5} />
                      </div>
                      <p className="text-slate-500">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mid tabs */}

        <MidTabs />

        {/* contact & socials icon*/}
        <SingleProfilesContact />

        {/* review summary */}

        <ReviewSummary />
      </Container>

    </div>
  );
};

export default SingleProfile;
