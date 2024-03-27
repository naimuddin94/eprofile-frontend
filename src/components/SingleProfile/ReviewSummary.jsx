import React from "react";
import Ratings from "../Ratings/Ratings";
import user from "../../assets/profiles/Ellipse 9.png";
import Image from "next/image";

const ReviewSummary = () => {
  return (
    <div className="mb-7">
      <h2 className="font-bold text-[#000000] text-xl py-2">Review Summary</h2>
      {[1, 2, 3].map((item, index) => (
        <div key={item}>
          <div className="border mb-4 border-slate-600 p-">
            <div className="border-b border-slate-600">
              <div className="p-4 lg:p-7">
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-full h-[50px] w-[50px]"
                    src={user}
                    height={45}
                    width={45}
                    alt="users"
                  />
                  <div className="space-y-2">
                    <h2 className="text-[#000000] text-[19px] font-normal">
                      Daneen Feehery, Management Analyst at Arlington County
                      Fire Department
                    </h2>
                    <p className="text-slate-500 text-[17px]">
                      Posted 11 months ago
                    </p>
                  </div>
                </div>
                <p className="text-[#000000] font-medium pt-6 py-3 text-[18px]">
                  From start to finish, AllianceTek was hardworking and
                  responsive providing quality work, expert insights, and great
                  collaboration
                </p>
              </div>
            </div>

            <div className="  grid grid-cols-1 lg:grid-cols-4">
              <div className="col-span-1 p-4 border-r border-slate-600">
                <h3 className="font-semibold text-[18px]">Rating Breakdown</h3>
                <div className="space-y-1">
                  {" "}
                  <div className="flex flex-wrap  items-center justify-between">
                    <h4 className="text-slate-600 text-[17px] font-semibold">
                      Quality
                    </h4>
                    <div className="flex items-center gap-1 ">
                      <Ratings ratings={5} />
                    </div>
                  </div>
                  <div className="flex  flex-wrap items-center justify-between">
                    <h4 className="text-slate-600 text-[17px] font-semibold">
                      Schedule & Timing
                    </h4>
                    <div className="flex items-center gap-1 ">
                      <Ratings ratings={5} />
                    </div>
                  </div>
                  <div className="flex  flex-wrap items-center justify-between">
                    <h4 className="text-slate-600 text-[17px] font-semibold">
                      Communication
                    </h4>
                    <div className="flex items-center gap-1 ">
                      <Ratings ratings={5} />
                    </div>
                  </div>
                  <div className="flex  flex-wrap items-center justify-between">
                    <h4 className="text-slate-600 text-[17px] font-semibold">
                      Overall Rating
                    </h4>
                    <div className="flex items-center gap-1 ">
                      <Ratings ratings={5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 p-4">
                <h3 className="font-semibold text-[18px]">Review Summary</h3>
                <p className="text-[17px] font-normal text-[#000000] mt-1">
                  We have thoroughly enjoyed working with AllianceTek on our
                  technology. Our expectations for the product were exceeded all
                  thanks to the hard work that AllianceTek put into the project
                  ensuring that our vision came to life and making improvements
                  along the way to make it even better. The team has always been
                  responsive, answering our questions and addressing our needs
                  in a very timely manner. They have also gone above and beyond
                  to help us with requests that have come up and may have been
                  outside the original scope of work, which was always
                  appreciated. We felt they truly cared about the work they were
                  doing for us, and wanted to see its success beyond the
                  completion of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSummary;
