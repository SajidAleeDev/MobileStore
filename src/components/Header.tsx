import { DataHeader } from "@/data/DataHeader";
import { Input } from "@nextui-org/react";
import React from "react";

function Header() {
  return (
    <div className=" h-[70px]  border-b-[0.5px]   ">
      <div className=" container flex items-center justify-center sm:justify-between py-3">
        <div className=" flex items-center space-x-3  ">
          <img src="/logo.png" alt="logo" className=" h-[52px] w-[52px] " />
          <h1 className=" text-[#AB2814] text-[20px]">ALMIR CO.</h1>
        </div>
        <div className=" hidden sm:block">
          <Input
            size={"md"}
            type="text"
            placeholder="Search"
            className="w-[200px] lg:w-[500px] md:w-[270px] "
          />
        </div>
        <div className=" hidden sm:flex items-center space-x-4">
          {DataHeader.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <item.icon />

              <p className=" text-[16px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
