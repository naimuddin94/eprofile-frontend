import Container from "@/components/share/Container";
import React from "react";
import user from "../../assets/press/user.png";
import Image from "next/image";

const SinglePressPage = () => {
  return (
    <div>

      <Container>
        {/* cover image with overlay */}

        <div className="relative my-4 mb-3 lg:mb-6 rounded-md w-full h-[300px] md:h-[460px] lg:h-[680px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover h-full bg-center rounded-md"
            style={{
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqaacG0IFi~b6Usqr2hjR0FOpOeBWyN6nrxy8LnQU16CATsZPVrP-w-Lg4oXG~nI4mOM8FP8xkMvk5nOrDfj3i3~QW8u5EocORs4-czMeMScGW5vz5fpu0eJ2YpzJc-hrPW9YSrvruEZvGuXCpf~zEHlYVZGOTLxEHCQJbkj9fGXHaNDcK6-FeMDdDQj6IoDFptziJK30SCdHwA8ARGzrmIUZihZ-nGC6bpKo2cjhBr9OHoWwA0P54PWuU5loeRAagqcVHum~Y2Z337H5QilXNu4LFPGMNKfq7Wn7VFIgzNuBwM3eU3KBrkzVbxgOSNFX4ZvgaGpdsg9-18L0T9GMQ__")',
              backgroundSize: "cover`",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="absolute space-y-2 bottom-1 lg:bottom-2 left-2 lg:left-4 p-4 text-white z-10">
            <button className="px-4 text-[15px] py-[5px] mb-2 rounded-md bg-primary text-white">
              Technology
            </button>
            <h1 className="text-xl lg:text-3xl font-semibold  mb-2">
              The Impact of Technology on the <br /> Workplace: How Technology
              is Changing
            </h1>
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full border"
                src={user}
                alt="user"
                height={30}
                width={30}
              />
              <p className="text-sm">Tracey Wilson - August 20, 2022</p>
            </div>
          </div>
        </div>

        <main>
          <div className="py-5 space-y-1 text-[#111111]">
            <h2 className="text-xl lg:text-[35px] leading-10 font-semibold">
              How to Write a Press Release That Gets <br /> Results in 2023
              (Expert Tips)
            </h2>
            <p className="text-slate-500 font-semibold">
              by Dmitry Dragilev | Jul 5, 2023 |
            </p>
            <p className="text-[17px] text-[#000000] py- leading-8">
              When writing a press release, one of the biggest mistakes PR
              managers often make is focusing too much on promotional language
              for their brand and faih3ng to “deh3ver newsworthy content”. How
              many times have you heard “ just deh3ver newsworthy content”?{" "}
              <br /> But nobody tells you how to combine a newsworthy story with
              your brand. <br /> One game-changer is not to overlook the
              importance of presenting the most vital information upfront and
              crafting an attention-grabbing title. Journah3sts respond to just
              3% of pitches, according to Eary Stage Marketing’s latest survey,
              so if you don’t have a well-crafted title and a good story, you
              won’t make it. <br /> In this article, we will present 7 easy
              steps you can follow and write a press release that effectively
              communicates your message and leaves a lasting impression. We will
              also present the best way to pitch your press release to make sure
              you get in that 3% every time you have a good story.
            </p>

            <div className="space-y-2 py-2 text-[#000000]">
              <h3 className="text-xl lg:text-[35px] leading-10 font-semibold">
                How To Write a Press Release: 7 Steps
              </h3>
              <p className="text-[#000000] text-[17px]">
                Here’s your step-by-step guide on how to craft a well-written
                press release:
              </p>
            </div>

            <div className="pt-4 lg:pt-7 py-3">
              <div className="space-y-1">
                <div className="mb-5">
                  <h3 className="text-xl lg:text-[33px] leading-10 font-semibold">
                    1. Find Ways To Be Newsworthy
                  </h3>
                  <p className="text-[#000000] text-[19px]">
                    As you’ll be pitching to journah3sts, create a news release
                    with that in mind.
                  </p>
                </div>

                <div className="space-y-1 ">
                  <div className="mb-5">
                    <h3 className="text-xl lg:text-[33px] leading-10 font-semibold">
                      2. Write Your Press Release Headline
                    </h3>
                    <p className="text-[#000000] text-[19px]">
                      Your press release headh3ne is the first thing anyone’s
                      going to see, so you have to make sure it’s perfect.
                    </p>
                    <p className="text-[#000000] text-[19px]">
                      The goal of your press release headh3ne should be to get
                      in, impress the journah3st, and get out.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl mb-1 lg:text-[33px] leading-10 font-semibold">
                    3. Craft Your Lead
                  </h3>
                  <div className="space-y-1 text-[#000000] text-[19px]">
                    <p>
                      Your lead is the first paragraph in your press release.
                    </p>
                    <p>
                      Usually consisting of 35 to 45 words, it summarizes the
                      most critical parts of your press release.
                    </p>
                    <p>
                      This first paragraph has to answer the “5 Ws” as concisely
                      as possible.
                    </p>

                    <div>
                      <ul className="list-disc text-slate-600 pt-2">
                        <li>
                          Who: Who’s involved in the news story? Which person or
                          company is involved?
                        </li>
                        <li>What: What’s happening? What’s it about?</li>
                        <li>
                          When: When did this story or event happen? When is it
                          going to happen?
                        </li>
                        <li>
                          Why: Why is this information relevant to a reader of
                          these media outlets?
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>



      </Container>


    </div>
  );
};

export default SinglePressPage;
