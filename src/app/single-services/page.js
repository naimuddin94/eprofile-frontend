"use client";
import Container from "@/components/share/Container";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import user1 from "../../assets/profiles/men.png";
import men from "../../assets/profiles/sm.png";
import { GoVerified } from "react-icons/go";

import { GoThumbsup } from "react-icons/go";

import image1 from "../../assets/Rectangle 3843.png";
import image2 from "../../assets/Frame 611 (1).png";
import image3 from "../../assets/Frame 611.png";
import user from "../../assets/Ellipse 10.png";
import Image from "next/image";
import Ratings from "@/components/Ratings/Ratings";

const images = [image1, image2, image3];

const SingleService = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      <Container>
        <div className="my-3 lg:my-4">
          <div className="space-y-1 lg:space-y-2">
            <h1 className="text-[#000000] font-medium text-xl lg:text-3xl">
              I will be full stack web and software developer build applications
            </h1>
            <div className="flex items-center gap-3">
              <FaStar className="text-xl text-[#FFAD33]" />
              <p className="text-[#111111] font-semibold text-[18px]">5.0</p>
              <p className="text-slate-500 text-[18px]">(50)</p>
              <p className="text-slate-500 flex items-center gap-1 text-[18px]">
                <IoCartOutline className="text-xl" /> 60 sales
              </p>
            </div>
          </div>

          {/* slider */}

          <section className="my-4 lg:my-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-7">
              <div className="col-span-3 w-full">
                <div className=" h-[210px] w-full  ml-3 lg:ml-0 md:h-[290px] lg:h-[450px]   overflow-hidden  border-2 border-gray-100  rounded-xl">
                  <Image
                    height={250}
                    width={550}
                    className="h-full  w-full object-cover "
                    src={currentImage}
                    alt="Service Image"
                  />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ml-4 lg:ml-0 gap-4 lg:gap-3   my-3">
                  {images?.map((image) => (
                    <button
                      onClick={() => setCurrentImage(image)}
                      className={`w-full border  ${
                        currentImage === image && "border border-orange-500"
                      } rounded-lg`}
                      key={image}
                    >
                      <Image
                        height={100}
                        width={100}
                        className="w-[100px] lg:w-full md:mx-auto md:text-center p-2   md:h-28 rounded-lg"
                        src={image}
                        alt="service image"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-span-1 border-2 ml-9 lg:ml-0 h-full lg:h-[360px] rounded-lg bg-primary-foreground border-slate-700  p-4 lg:p-5 w-full">
                <div className="flex flex-col justify-center items-center space-y-1 lg:space-y-2">
                  <div className="text-center">
                    <h2 className="font-semibold text-xl lg:text-3xl text-[#000000]">
                      Basic
                    </h2>
                    <div className="my-2">
                      <h4 className="text-xl lg:text-2xl font-normal">
                        Business Plan
                      </h4>
                      <h4 className="text-[#000000] text-[19px]">5 day’s</h4>
                    </div>

                    <div className="font-bold text-[18px] lg:text-[21px] text-[#000000] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PiHandCoinsDuotone className="text-black" />
                        <h3>Price</h3>
                      </div>
                      <h3>$500</h3>
                    </div>
                  </div>
                  <div className="pt-4 lg:mt-7 mx-auto  text-center">
                    <button className="bg-primary text-[18px] w-full  py-2 rounded-md text-white">
                      Contact Request
                    </button>

                    <button className=" mt-5 lg:mt-7 bg-primary-foreground border border-primary text-[18px]   w-full  py-2 rounded-md text-primary">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* description */}

          <section className="mt-4 my-4">
            <div>
              <h2 className="mb-2 font-bold text-[22px] text-[#000000]">
                Description
              </h2>

              <div className="space-y-2 lg:space-y-3 text-[18px] lg:text-[20px] font-normal text-[#000000]">
                <span>
                  Do you possess an innovative project idea that you dream of
                  bringing to life? Are you weary of wrestling with vexing bugs
                  in your Java code or perhaps you are eager to embark on
                  creating a Java project or a game?
                </span>
                <br /> <br />
                <span>
                  Enter our realm of expertise! Our custom Java service is
                  meticulously designed to transform your ideas into reality,
                  delivering an exceptional project tailored to your unique
                  vision. Say farewell to coding frustrations and let us turn
                  your dream project into a tangible and remarkable reality.
                </span>
                <br />
                <br /> <span>Advantages</span>
                <br />
                <span>
                  I specialize in managing your Java projects with expertise and
                  finesse. As a seasoned Java developer, my focus extends to
                  tackling coding challenges, crafting captivating games, and
                  delivering intricate projects. In the front end, I am adept at
                  utilizing Swing or JavaFX. <br /> <br /> My mission is
                  clear-cut to efficiently and effectively address your coding
                  needs. Whether it is resolving elusive bugs or embarking on a
                  new project, my skills are at your disposal. From bug fixes to
                  the construction of exceptional Java applications
                  incorporating AI algorithms or design patterns, I have got the
                  expertise to bring your coding vision to life. <br /> <br />
                  In this offering, I undertake the creation of Java console
                  programs and JavaFX programs. The Java software will be
                  delivered as a Maven project containing the source code.
                  Please note that my support is limited to MariaDB, MySQL, and
                  SQLite databases. <br /> <br /> Java applications can become
                  outdated over time due to the emergence of newer library
                  versions or the deprecation of functions and classes.
                  Consequently, recompilation of the Java application becomes
                  necessary. Moreover, I can introduce new features or extend
                  existing Java libraries.
                  <br /> <br /> There are scenarios where a feature-rich
                  software with a graphical user interface (GUI) is unnecessary.
                  Instead, a software with a text-based user interface (TUI) or
                  a command line interface is more suitable. A robust Java
                  library capable of implementing a TUI, akin to the renowned
                  command line tool Midnight Commander, is Lanterna. Another
                  option involves utilizing Picocli, enabling the creation of
                  command line tools such as git and tar. Command line tools are
                  well-suited for software development used by scientists or
                  running on a Raspberry Pi.
                  <br /> <br /> For GUI-based software requirements, JavaFX is a
                  prime consideration. Among the myriad Java GUI frameworks
                  available, JavaFX stands out as the most advanced. It
                  facilitates a fluid layout achievable through the Grid Pane as
                  the main container, and its styling mirrors that of a website,
                  seamlessly integrating with CSS scripts. <br /> <br /> Lets
                  collaborate and transform your coding ideas into reality!{" "}
                  <br /> <br /> Cordially, <br /> Thank you.
                </span>
              </div>
            </div>
          </section>

          {/* review */}

          <section>
            <h2 className="mb-2 border-b-2 border-slate-300 py-2 font-bold text-[22px] text-[#000000]">
              Review
            </h2>

            <div>
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 mb-2 border-b-2 border-slate-300 pb-2"
                >
                  <Image
                    className="h-[44px] w-[44px] rounded-full"
                    src={user}
                    height={37}
                    width={37}
                    alt="user"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-[19px] ">NicolasTahari</h2>
                      <span>
                        <GoThumbsup className="text-xl" />
                      </span>
                      <div className="flex items-center gap-x-1">
                        <Ratings ratings={5} />
                      </div>
                    </div>

                    <h2 className="text-[18px] lg:text-[20px] font-normal py-1 lg:py-2">
                      Excellent work as usual, I recommend!
                    </h2>
                    <p className="text-slate-500 text-[18px] lg:text-[19px] font-normal">
                      Mar 10, 2024 at 6:59 PM
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-right flex justify-end ">
                <button className="bg-primary  text-right text-[18px] px-4  py-2 rounded-md text-white">
                  More reviews
                </button>
              </div>
            </div>
          </section>

          {/* about seller */}

          <section className="my-2">
            <h2 className="mb-2 font-bold text-[22px] text-[#000000]">
              About the seller
            </h2>
            <div className="border border-slate-500 p-4">
              <div className="flex gap-3">
                <Image
                  className="h-[44px] w-[44px] rounded-full"
                  src={user}
                  height={37}
                  width={37}
                  alt="user"
                />

                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-[19px] ">NicolasTahari</h2>
                    <span>
                      <GoVerified className="text-xl text-primary" />
                    </span>
                  </div>

                  <p className="my-2 text-slate-500 text-[18px] flex gap-1 items-center">
                    <IoTimeOutline className="text-xl" /> 19 minutes ago
                  </p>

                  <div className="flex flex-col lg:flex-row gap-10 w-full py-2 flex-wrap j ">
                    <div className="w-full lg:w-[65%]">
                      <p className="text-[#000000] text-[17px] font-normal">
                        Lorem ipsum dolor sit amet consectetur. Ultrices
                        adipiscing proin sed at urna donec. Dolor egestas
                        consequat in turpis tempor nunc dignissim laoreet. Hac
                        at aliquam malesuada elit vivamus tincidunt. Eu tellus
                        elementum proin at quis nisl nibh donec molestie. Amet
                        mauris diam scelerisque est in dis consectetur diam.
                        Enim faucibus mauris ullamcorper lacus elementum.
                        Molestie cras diam elit id cursus ante placerat euismod
                        amet. Sed eget at gravida ultricies fringilla ut integer
                        aliquet. In hac volutpat tortor non mauris id eget
                        molestie. Lobortis in phasellus pellentesque phasellus
                        purus aliquet enim purus. A nisl etiam at ultrices. Duis
                        sed arcu sagittis egestas enim. Habitasse rhoncus
                        ultricies tortor at. Tristique risus in nisl sodales
                        sagittis lectus cras. Eu facilisis a augue non. Mi in
                        adipiscing turpis eleifend leo felis nulla vestibulum
                        malesuada. Venenatis suspendisse nunc tristique dolor.
                        Convallis sit purus rhoncus mattis proin porttitor nec
                        scelerisque quisque. Tellus enim laoreet in ut a lorem
                        vitae.
                      </p>
                      <div className="text-center mt-2 flex justify-center ">
                        <button className="bg-primary  text-right text-[18px] px-5 lg:px-7  py-2 rounded-md text-white">
                          Learn more
                        </button>
                      </div>
                    </div>

                    <div className="w-full space-y-1 lg:space-y-3 lg:w-[30%]">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>
                            <IoTimeOutline className="text-[22px] text-slate-600" />
                          </span>
                          <h2 className="font-normal text-slate-600 text-[18px] ">
                            Average response time
                          </h2>
                        </div>

                        <h2 className="text-slate-600 text-[19px] font-normal">
                          8 h
                        </h2>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>
                            <IoCartOutline className="text-[22px] text-slate-600" />
                          </span>
                          <h2 className="font-normal text-slate-600 text-[18px] ">
                            Orders in progress
                          </h2>
                        </div>

                        <h2 className="text-slate-600 text-[19px] font-normal">
                          15
                        </h2>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>
                            <FaChartLine className="text-[22px] text-slate-600" />
                          </span>
                          <h2 className="font-normal text-slate-600 text-[18px] ">
                            Sales in total
                          </h2>
                        </div>

                        <h2 className="text-slate-600 text-[19px] font-normal">
                          5,932
                        </h2>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>
                            <TbUserSquare className="text-[22px] text-slate-600" />
                          </span>
                          <h2 className="font-normal text-slate-600 text-[18px] ">
                            Seller since
                          </h2>
                        </div>

                        <h2 className="text-slate-600 text-[19px] font-normal">
                          Feb , 2016{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* service */}

          <section className="mt-3 py-2">
            <h2 className="mb-2  py-2 font-bold text-[22px] text-[#000000]">
              Other services provided by this seller{" "}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className="">
                  <div className="">
                    <Image
                      className=" rounded-md w-full"
                      src={user1}
                      height={120}
                      width={150}
                      alt="user"
                    />
                  </div>
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
                      <FaStar className="text-xl text-[#FFAD33]" />
                      <p className="text-[#111111]">5.0</p>
                      <p className="text-slate-500">(65)</p>
                    </div>

                    <h4 className="font-semibold text-[16px] text-[#000000]">
                      From $185
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5 my-2 flex justify-center ">
              <button className="bg-primary  text-right text-[18px] px-5 lg:px-7  py-2 rounded-md text-white">
                All their services
              </button>
            </div>
          </section>

          {/* realted services */}

          <section className="mt-4 lg:mt-10 py-2">
            <h2 className="mb-2  py-2 font-bold text-[22px] text-[#000000]">
              All their services
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                <div key={i} className="">
                  <div className="">
                    <Image
                      className=" rounded-md w-full"
                      src={user1}
                      height={120}
                      width={150}
                      alt="user"
                    />
                  </div>
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
                      <FaStar className="text-xl text-[#FFAD33]" />
                      <p className="text-[#111111]">5.0</p>
                      <p className="text-slate-500">(65)</p>
                    </div>

                    <h4 className="font-semibold text-[16px] text-[#000000]">
                      From $185
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default SingleService;
