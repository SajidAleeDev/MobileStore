import { useItemContext } from "@/providers/Context";
import React from "react";
import CustomeButton from "./CustomeButton";

type props = {
  items: {
    image: string;
    name: string;
    BackGroundColor: string;
    Price: string;
    Discount: string;
    TalkTime: string;
    Text: string;
    HighSpeedData: string;
  };
};

function HomeBillPayItem({ items }: props) {
  const { addToCart } = useItemContext();
  const [isAddToCart, setIsAddToCart] = React.useState(false);

  const handleAddToCart = (items: any) => {
    setIsAddToCart(true);
    addToCart(items);
  };

  return (
    <div
      className=" w-full md:w-[187px] h-[237px]
       rounded-2xl  
         hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out  mt-4 rounded-lg p-3 "
      style={{
        boxShadow: "0px 3px 13px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className=" flex items-center   justify-between  ">
        <div
          className={` h-[66px] w-[66px] bg-[${items.BackGroundColor}] grid place-items-center rounded-lg `}
        >
          <img src={items.image} alt={items.name} className=" " />
        </div>
        <div className=" flex flex-col items-center">
          <p className={` text-[#001931] font-bold text-[18px] `}>
            {items.Price}
          </p>
          <p
            className={` text-[#D92727] font-bold text-[18px] 
               line-through
            `}
          >
            {items.Discount}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start mt-2  ">
        <h1 className=" font-bold text-base">{items.name}</h1>
        <p className="text-sm mt-2">{items.TalkTime}</p>
        <p className="text-sm">{items.Text}</p>
        <p className="text-sm">{items.HighSpeedData}</p>
      </div>
      <CustomeButton
        items={items}
        isAddToCart={isAddToCart}
        handleAddToCart={handleAddToCart}
        title={"Add to Cart"}
      />
    </div>
  );
}

export default HomeBillPayItem;
