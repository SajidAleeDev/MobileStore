import { DataHeader } from "@/data/DataHeader";
import { Input } from "@nextui-org/react";
import MenuSheet from "./MenuSheet";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  return (
    <div className=" h-[70px]  border-b-[0.5px]   ">
      <div className=" container flex items-center justify-between  py-3">
        <div className=" flex items-center space-x-3  ">
          <img src="/logo.png" alt="logo" className=" h-[52px] w-[52px] " />
          <h1 className=" text-[#AB2814] text-[20px]">ALMIR CO.</h1>
        </div>
        <div className=" md:hidden">
          <MenuSheet />
        </div>
        <div className=" hidden md:block">
          <Input
            size={"md"}
            type="text"
            placeholder="Search"
            className="w-[200px] lg:w-[500px] md:w-[270px] "
          />
        </div>
        <div className=" hidden md:flex items-center space-x-4">
          {DataHeader.map((item) => (
            <button
              key={item.id}
              className="flex items-center space-x-4   "
              onClick={() => {
                navigation(item.Link);
              }}
            >
              <item.icon />

              <p className=" text-[16px]">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
