"use client";
import { useState } from "react";
import MissionStatement from "./Tabs/MissionStatement";
import History from "./Tabs/History";
import Target from "./Tabs/Target";
import Competitive from "./Tabs/Competitive";
import Financial from "./Tabs/Financial";
import Milestones from "./Tabs/Milestones";
import Partnerships from "./Tabs/Partnerships";
import Social from "./Tabs/Social";
import Future from "./Tabs/Future";

const MidTabs = () => {
  const [state, setState] = useState("Mission");

  return (
    <div className="my-3">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* tabs */}
        <div className="col-span-1 w-full ">
          <ul className="flex gap-4 tracking-wider lg:gap-0 items-center lg:items-start flex-row cursor-pointer flex-wrap lg:flex-col lg:space-y-2">
            <li
              onClick={() => setState("Mission")}
              className={`text-primary ${
                state === "Mission" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Mission Statement
            </li>

            <li
              onClick={() => setState("History")}
              className={`text-primary ${
                state === "History" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              History
            </li>

            <li
              onClick={() => setState("Target")}
              className={`text-primary ${
                state === "Target" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Target Market
            </li>

            <li
              onClick={() => setState("Competitive")}
              className={`text-primary ${
                state === "Competitive" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Competitive Advantage
            </li>
            <li
              onClick={() => setState("Financial")}
              className={`text-primary ${
                state === "Financial" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Financial Overview
            </li>
            <li
              onClick={() => setState("Milestones")}
              className={`text-primary ${
                state === "Milestones" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Milestones and Achievements
            </li>
            <li
              onClick={() => setState("Partnerships")}
              className={`text-primary ${
                state === "Partnerships" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Partnerships or Affiliations
            </li>
            <li
              onClick={() => setState("Social")}
              className={`text-primary ${
                state === "Social" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Social Responsibility Initiatives
            </li>
            <li
              onClick={() => setState("Future")}
              className={`text-primary ${
                state === "Future" ? "font-bold" : "font-normal "
              } text-[19px]`}
            >
              Future Goals and Outlook
            </li>
          </ul>
        </div>

        {/* content */}
        <div className="col-span-3  w-full ">
          <div>
            {state === "Mission" && (
              <div className="py-3 ">
                <MissionStatement />
              </div>
            )}
          </div>

          <div>
            {state === "History" && (
              <div className="py-3 ">
                <History />
              </div>
            )}
          </div>

          <div>
            {state === "Target" && (
              <div className="py-3 ">
                <Target />
              </div>
            )}
          </div>

          <div>
            {state === "Competitive" && (
              <div className="py-3 ">
                <Competitive />
              </div>
            )}
          </div>

          <div>
            {state === "Financial" && (
              <div className="py-3 ">
                <Financial />
              </div>
            )}
          </div>

          <div>
            {state === "Milestones" && (
              <div className="py-3 ">
                <Milestones />
              </div>
            )}
          </div>

          <div>
            {state === "Partnerships" && (
              <div className="py-3 ">
                <Partnerships />
              </div>
            )}
          </div>

          <div>
            {state === "Social" && (
              <div className="py-3 ">
                <Social />
              </div>
            )}
          </div>

          <div>
            {state === "Future" && (
              <div className="py-3 ">
                <Future />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidTabs;
