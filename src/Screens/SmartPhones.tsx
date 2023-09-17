import FilterItem from "@/components/FilterItem";
import FiltersProduct from "@/components/FiltersProduct";
import { DataSmartPhonesFilter } from "@/data/DataSmartPhones";

function SmartPhones() {
  return (
    <div className="h-screen flex space-x-3 container  ">
      <div className="w-[25%]  h-screen hidden md:block overflow-y-auto ">
        <FiltersProduct filters={DataSmartPhonesFilter} />
      </div>
      <div className=" flex-1 bg-slate-500 h-screen ">
        <FilterItem />
      </div>
    </div>
  );
}

export default SmartPhones;
