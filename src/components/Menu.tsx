import { DataMenu } from "@/data/DataMenu";
import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [active, setActive] = React.useState(0);
  const navigation = useNavigate();
  return (
    <div className=" h-[69px] border-b-[0.2px]  ">
      <div className=" container  flex items-center space-x-4 h-full ">
        {DataMenu.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center space-x-4 pb-2   ${
              active === index && "border-b-3 border-[#AB2828] "
            } `}
            onClick={() => {
              setActive(index);
              navigation(item.Link);
            }}
          >
            <p className=" text-[16px]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
