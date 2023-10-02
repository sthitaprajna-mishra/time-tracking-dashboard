import React from "react";
import jeremy from "../assets/images/image-jeremy.png";

const Report = ({ choice, setChoice }) => {
  return (
    <div className="md:row-span-2 md:mt-6 md:flex md:flex-col">
      <div className="bg-darkBlue rounded-t-2xl md:pb-6 md:grow">
        <div className="bg-blue rounded-xl flex items-center justify-center space-x-4 py-6 md:flex-col md:space-x-0 md:items-start md:justify-start md:pl-6 md:pt-6 md:h-full">
          <img
            className="h-16 w-16 border-2 border-white rounded-full md:h-20 md:w-20"
            src={jeremy}
            alt="jeremy image"
          />
          <div>
            <div className="text-sm text-paleBlue md:mt-8">Report for</div>
            <div className="text-xl text-white font-light md:hidden">
              Jeremy Robson
            </div>
            <div className="hidden text-3xl text-white font-light md:text-4xl md:block">
              Jeremy
            </div>
            <div className="hidden text-3xl text-white font-light md:text-4xl md:block">
              Robson
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkBlue rounded-b-xl flex items-center justify-between space-x-2 py-4 px-6 md:flex-col md:items-start md:space-x-0 md:space-y-2 md:pb-4 md:mb-1">
        <div
          className={
            choice === "daily"
              ? "hover:text-white hover:cursor-pointer transition-all text-white"
              : "hover:text-white hover:cursor-pointer transition-all text-desaturatedBlue"
          }
          onClick={() => setChoice("daily")}
        >
          Daily
        </div>
        <div
          className={
            choice === "weekly"
              ? "hover:text-white hover:cursor-pointer transition-all text-white"
              : "hover:text-white hover:cursor-pointer transition-all text-desaturatedBlue"
          }
          onClick={() => setChoice("weekly")}
        >
          Weekly
        </div>
        <div
          className={
            choice === "monthly"
              ? "hover:text-white hover:cursor-pointer transition-all text-white"
              : "hover:text-white hover:cursor-pointer transition-all text-desaturatedBlue"
          }
          onClick={() => setChoice("monthly")}
        >
          Monthly
        </div>
      </div>
    </div>
  );
};

export default Report;
