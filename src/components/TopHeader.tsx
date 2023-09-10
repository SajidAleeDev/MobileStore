import React from "react";
import { icons } from "../icons/index";
import { DataTopHeader } from "@/data/DataTopHeader";

function TopHeader() {
  return (
    <div className=" h-[40px] bg-[#f5f5f5] ">
      <div className=" container  mx-auto flex items-center justify-center md:justify-between   h-full text-[10px] ">
        <div className="text-[#333] ">
          <h1>Welcome to Almirco.</h1>
        </div>
        <div className=" hidden md:flex items-center space-x-4 ">
          {DataTopHeader.map((item) => (
            <div
              key={item.id}
              className={`  border-black pr-2 flex items-center justify-between ${
                item.title === "All Offers" ? "border-r-0" : "border-r-[1px]"
              } `}
            >
              <item.icon className=" mr-2 w-[15px] h-[15px] " />
              <h1>
                {item.title} <span>{item.subtitle}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
