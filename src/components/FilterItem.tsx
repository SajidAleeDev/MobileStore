import { useItemContext } from "@/providers/Context";

function FilterItem() {
  const { selectedItem } = useItemContext();

  console.log(selectedItem);

  return (
    <div>
      <h2>Selected Item</h2>
      {selectedItem ? <p>{selectedItem.name}</p> : <p>No item selected</p>}
    </div>
  );
}

export default FilterItem;
