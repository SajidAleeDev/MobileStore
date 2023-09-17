import { useItemContext } from "@/providers/Context";
import { useState } from "react";

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
      // Item is currently collapsed, so remove it from the list
      setCollapsedItems(collapsedItems.filter((id) => id !== itemId));
    } else {
      // Item is currently expanded, so add it to the list
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
            className={` text-2xl font-bold mb-2`}
            onClick={() => toggleCollapse(filter.id)}
          >
            {filter.title}
          </h1>
          <div
            className={`${
              collapsedItems.includes(filter.id) ? "hidden" : "flex"
            } overflow-hidden transition-all duration-500 ease-in-out
            flex-col space-y-4 `}
          >
            {filter.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                {filter.type === "Button" ? (
                  <button
                    type="button"
                    name={filter.title}
                    id={item.id}
                    className="w-full h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600  focus:outline-none"
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
