import React from "react";
import Container from "../share/Container";
import img from "@/assets/Home/experience.png";
import Link from "next/link";
import Image from "next/image";

const ShareExperience = () => {
  return (
    <div className="my-5 pb-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <Image
              className="w-[600px]"
              src={img}
              height={100}
              width={600}
              alt="experience"
            />
          </div>

          <div className=" mt-5 lg:mt-0 space-y-1 md:space-y-2 lg:space-y-3 text-start lg:text-right">
            <h1 className="font-semibold tracking-wide lg:tracking-wider text-xl lg:text-3xl">
              Share your experience <br /> to help others
            </h1>
            <p className="font-medium tracking-wide lg:tracking-wider">
              Reviews help businesses make smarter decisions. <br /> Join
              60,000+ unbiased reviewers by sharing your experience.
            </p>
            <div className="pt-3">
              <Link href="/">
                <button className="bg-primary text-[14px]  gap-x-2 text-white px-4 py-2 rounded-md">
                  Write a review
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShareExperience;