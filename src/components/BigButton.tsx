import { useItemContext } from "@/providers/Context";

function BigButton() {
  return (
    <div className=" container mt-4 flex ">
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-500   w-full">
        Urgent Need Help
      </button>
    </div>
  );
}

export default BigButton;
