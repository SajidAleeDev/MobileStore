import { useItemContext } from "@/providers/Context";
import React from "react";
import CustomeButton from "./CustomeButton";

function HomeProductItems({ items }: any) {
  const [isAddToCart, setIsAddToCart] = React.useState(false);
  const { addToCart } = useItemContext();

  const handleAddToCart = (items: any) => {
    setIsAddToCart(true);
    addToCart(items);
  };

  return (
    <div
      className="  mt-3 border-[0.7px] flex flex-col items-center justify-center h-[330px] md:w-[227px] rounded-[10px] 
         w-full
    
    hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out hover:border-[0.7px] hover:border-[#000]
      "
    >
      <div
        className=" 
        h-[200px] w-full bg-[#F5F5F5]
        grid place-items-center
      "
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <img
          src={items.image}
          className="   "
          alt="
       logo
      "
        />
      </div>

      <div
        className="  bg-white h-[130px] w-full px-2 "
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <h1 className="  text-[#222222] font-bold  text-center md:text-left ">
          {items.name}
        </h1>
        <div className=" flex items-center space-x-3 mt-2 border-b-1 pb-2 justify-center md:justify-start">
          <p
            className="
            text-[#222222] font-bold 
            text-center md:text-left
            "
          >
            ${items.price}
          </p>
          <p
            className="
            text-[#D92727] font-bold  line-through
            text-center md:text-left
            "
          >
            ${items.Discount}
          </p>
        </div>
        <CustomeButton
          items={items}
          isAddToCart={isAddToCart}
          handleAddToCart={handleAddToCart}
          title={"Add to Cart"}
        />
      </div>
    </div>
  );
}

export default HomeProductItems;
