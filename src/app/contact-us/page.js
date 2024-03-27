import Container from "@/components/Container";
import Header from "@/components/share/Header";
import linkedin from "../../assets/Footer/LinkedIn Logomark.png";
import facebook from "../../assets/Footer/Logomark.png";
import youtube from "../../assets/Footer/YouTube Logomark.png";
import twitter from "../../assets/Footer/Twitter Logomark.png";
import instagram from "../../assets/Footer/Instagram Logomark.png";
import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

const Contact = ({ title }) => {
  return (
    <div>
      <Header title={"Contact us"} />
      <Container>
        <h1 className="text-[#000000] text-center font-medium text-[19px] py-2">
          Any question or remarks? Just write us a message!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 p-5 ">
          <div className=" w-full bg-[#FFE8D9] rounded-lg p-4 lg:p-7 space-y-1 lg:space-y-2">
            <h2 className="font-bold text-black text-[18px]">
              Contact Information
            </h2>
            <div className="pt-2 space-y-4">
              <h4 className="font-normal text-[#000000] flex items-center gap-3 text-[18px]">
                {" "}
                <MdWifiCalling3 className="text-primary text-[22px]" />{" "}
                +8801700-000000
              </h4>
              <h4 className="font-normal text-[#000000] flex items-center gap-3 text-[18px]">
                {" "}
                <IoMailSharp className="text-primary text-[22px]" />{" "}
                demo@gmail.com
              </h4>
              <h4 className="font-normal text-[#000000] flex items-center gap-3 text-[18px]">
                {" "}
                <IoLocationSharp className="text-primary text-[22px]" /> 132
                Dartmouth Street Boston, Massachusetts <br />
                02156 United States
              </h4>
            </div>

            <div className="pt-2 lg:pt-5">
              <h2 className="font-bold text-black text-[18px]">Social Links</h2>
              <div className="my-3">
                <ul className="flex flex-wrap gap-2 lg:gap-4 items-center">
                  {/* linkedin */}

                  <a className="" href="">
                    <li className="h-9 w-9 rounded-full bg-[#FFFFFF] ">
                      <Image
                        className="mx-auto pt-[7px] rounded-md"
                        src={linkedin}
                        height={15}
                        width={19}
                        alt="linkedin"
                      />
                    </li>
                  </a>

                  {/* facebook */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[7px] rounded-md"
                        src={facebook}
                        height={10}
                        width={12}
                        alt="facebook"
                      />
                    </li>
                  </a>

                  {/* twitter */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[10px] rounded-md"
                        src={twitter}
                        height={10}
                        width={20}
                        alt="twitter"
                      />
                    </li>
                  </a>

                  {/* instagram */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[6px] rounded-md"
                        src={instagram}
                        height={10}
                        width={20}
                        alt="instagram"
                      />
                    </li>
                  </a>
                  {/* youtube */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[8px] rounded-md"
                        src={youtube}
                        height={10}
                        width={21}
                        alt="youtube"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#FFFFFF] shadow-md"></div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
