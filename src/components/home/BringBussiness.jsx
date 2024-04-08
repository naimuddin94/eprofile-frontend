import React from "react";
import Container from "../share/Container";
import img from "@/assets/Home/wave.png";
import Link from "next/link";
import Image from "next/image";

const BringBusiness = () => {
  return (
    <div className="my-5 pb-5 mt-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 mt-5 lg:mt-0 space-y-1 md:space-y-2 lg:space-y-3 ">
            <h1 className="font-semibold tracking-wide lg:tracking-wider text-xl lg:text-3xl">
              Bring your business where <br /> your customers are
            </h1>
            <p className="font-medium tracking-wide lg:tracking-wider">
              Millions of people are finding their next business partner on{" "}
              <br />
              eProfiles, make sure they can find you.
            </p>
            <div className="pt-3">
              <Link href="/">
                <button className="bg-primary text-[14px]  gap-x-2 text-white px-4 py-2 rounded-md">
                  Get Listed
                </button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              className="w-[600px w-full"
              src={img}
              height={100}
              width={750}
              alt="experience"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BringBusiness;