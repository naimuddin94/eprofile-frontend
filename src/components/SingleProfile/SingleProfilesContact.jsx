import Image from "next/image";
import React from "react";
import { GoLink } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

import facebook from "../../assets/profiles/facebook.png";
import linkedin from "../../assets/profiles/linkedin.png";
import youtube from "../../assets/profiles/youtube.png";
import x from "../../assets/profiles/twitter.png";
import amazon from "../../assets/profiles/amazon.png";
import pinterest from "../../assets/profiles/Pinterest.png";
import reddit from "../../assets/profiles/Reddit.png";
import tumblr from "../../assets/profiles/Tumblr.png";
import vk from "../../assets/profiles/VK Logomark.png";
import github from "../../assets/profiles/GitHub Logotype.png";

const SingleProfilesContact = () => {
  return (
    <div>
      <div className="my-3 pt-2">
        <h2 className="font-bold text-[#000000] text-xl py-2">Contact</h2>
        <h3 className="flex  text-[#000000] text-[18px] items-center gap-2">
          <IoLocationOutline className="text-primary text-xl" />
          Location
        </h3>

        <div className="border border-[#000000] mt-3 inline-block rounded-md p-4 space-y-2">
          <h3 className="font-semibold">United States</h3>
          <p className="text-[#000000] font-normal">
            5 Great Valley Parkway Suite 210, Malvern, Pennsylvania 19355
          </p>
        </div>

        {/* social */}

        <div className="pt-5 lg:pt-7 py-5">
          <h3 className="flex  text-[#000000] text-[18px] items-center gap-2">
            <GoLink className="text-primary text-xl font-normal" />
            Social links
          </h3>

          <div className="grid mt-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={facebook}
                height={70}
                width={110}
                alt="facebook"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lgh-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={linkedin}
                height={70}
                width={110}
                alt="linkedin"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={youtube}
                height={70}
                width={100}
                alt="youtube"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image className="" src={x} height={70} width={60} alt="x" />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px]shadow-red-300/45">
              <Image
                className=""
                src={amazon}
                height={70}
                width={110}
                alt="amazon"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={pinterest}
                height={70}
                width={100}
                alt="pinterest"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={reddit}
                height={70}
                width={80}
                alt="reddit"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image
                className=""
                src={tumblr}
                height={70}
                width={90}
                alt="tumblr"
              />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
              <Image className="" src={vk} height={70} width={40} alt="vk" />
            </div>

            <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px]  shadow-red-300/45">
              <Image
                className=""
                src={github}
                height={70}
                width={120}
                alt="github"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfilesContact;
