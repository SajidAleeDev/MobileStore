import {
  DataTopCategories,
  HomePayBill,
  HomeProduct,
} from "@/data/HomeProduct";

import { useNavigate } from "react-router-dom";
import { icons } from "./../icons/index";
import HomeBillPayItem from "./HomeBillPayItem";
import HomeProductItems from "./HomeProductItems";
import Topcategories from "./Topcategories";

type Props = {
  NavigationTitle: string;
  title: string;
  Product?: boolean;
  BILLPayment?: boolean;
  TopCategories?: boolean;
};

function ProducProvider({
  NavigationTitle,
  title,
  Product,
  BILLPayment,
  TopCategories,
}: Props) {
  const navigation = useNavigate();

  return (
    <div className=" container mt-4 ">
      <div className=" flex items-center justify-between border-b-1  ">
        <h1 className=" font-bold text-lg border-b-[2px] border-black pb-2 ">
          {title}
        </h1>
        <button
          className=" flex items-center justify-between hover:font-bold"
          onClick={() => navigation(NavigationTitle)}
        >
          View All
          <icons.Right size={"15px"} className=" " />
        </button>
      </div>
      <div>
        <div
          className={` flex items-center md:space-x-3 xl:justify-between  flex-wrap ${
            TopCategories && "justify-between md:justify-start "
          }   `}
        >
          {Product &&
            HomeProduct.map((item, index) => (
              <HomeProductItems key={index} items={item} />
            ))}
          {BILLPayment &&
            HomePayBill.map((item, index) => (
              <HomeBillPayItem key={index} items={item} />
            ))}
          {TopCategories &&
            DataTopCategories.map((item, index) => (
              <Topcategories key={index} items={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProducProvider;
