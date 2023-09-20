import { useItemContext } from "@/providers/Context";
import { useState } from "react";
import { icons } from "../icons/index";

interface Item {
  id: string;
  name: string;
}

interface Filter {
  id: string;
  title: string;
  type: "Radio" | "Checkbox" | "Button";
  items: Item[];
}

interface Props {
  filters: Filter[];
}

function FiltersProduct({ filters }: Props) {
  const { selectItem } = useItemContext();
  const [collapsedItems, setCollapsedItems] = useState<string[]>([]);

  const toggleCollapse = (itemId: string) => {
    if (collapsedItems.includes(itemId)) {
      setCollapsedItems(collapsedItems.filter((id) => id !== itemId));
    } else {
      setCollapsedItems([...collapsedItems, itemId]);
    }
  };

  const handleItemClick = (item: Item) => {
    selectItem(item);
  };

  return (
    <div className="flex flex-col space-y-4">
      {filters.map((filter) => (
        <div key={filter.title} className={`flex flex-col space-y-4 `}>
          <h1
            className={` text-lg font-bold mb-2 flex items-center justify-between `}
            onClick={() => toggleCollapse(filter.id)}
          >
            {filter.title}
            {collapsedItems.includes(filter.id) ? (
              <icons.ViewMore />
            ) : (
              <icons.ViewLess />
            )}
          </h1>
          <div
            className={`${
              collapsedItems.includes(filter.id) ? "hidden" : "flex"
            } overflow-hidden transition-all duration-500 ease-in-out
            flex-col space-y-4  `}
          >
            {filter.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-2 mt-2 ">
                {filter.type === "Button" ? (
                  <button
                    type="button"
                    name={filter.title}
                    id={item.id}
                    className="w-full text-left text-medium hover:font-bold focus:outline-none "
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name}
                  </button>
                ) : filter.type === "Checkbox" ? (
                  <>
                    <input
                      type="checkbox"
                      name={filter.title}
                      id={item.id}
                      className="w-5 h-5 text-blue-500 focus:outline-none"
                      onClick={() => handleItemClick(item)}
                    />
                    <label htmlFor={item.id} className="text-sm">
                      {item.name}
                    </label>
                  </>
                ) : filter.type === "Radio" ? (
                  <>
                    <input
                      type="radio"
                      name={filter.title}
                      id={item.id}
                      className="w-5 h-5 text-blue-500 focus:outline-none"
                      onClick={() => handleItemClick(item)}
                    />
                    <label htmlFor={item.id} className="text-sm">
                      {item.name}
                    </label>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FiltersProduct;
