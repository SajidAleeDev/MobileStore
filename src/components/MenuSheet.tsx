import {
  ItemClose,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DataMenu } from "@/data/DataMenu";
import { icons } from "@/icons";
import { useNavigate } from "react-router-dom";

function MenuSheet() {
  const navigation = useNavigate();
  return (
    <Sheet>
      <SheetTrigger>
        <icons.Menu />
      </SheetTrigger>
      <SheetContent side={"right"} className=" space-y-3 w-[250px] ">
        {DataMenu.map((item) => (
          <ItemClose
            key={item.id}
            className={`flex items-center space-x-4 pb-2   
            `}
            onClick={() => {
              navigation(item.Link);
            }}
          >
            <p className=" text-[16px]">{item.name}</p>
          </ItemClose>
        ))}
      </SheetContent>
    </Sheet>
  );
}

export default MenuSheet;
