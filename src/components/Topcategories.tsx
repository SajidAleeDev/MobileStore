type props = {
  items: {
    Image: string;
    name: string;
  };
};

function Topcategories({ items }: props) {
  return (
    <div className="mt-4">
      <div className="h-[132px] w-[132px] bg-[#F5F5F5] rounded-full grid place-items-center hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out hover:border-[1px] border-black  ">
        <img
          src={items.Image}
          alt={items.name}
          className={`
           ${items.name === "Mobile" && "h-[80px] w-[42px]"}
        `}
        />
      </div>
      <p className="text-center mt-2">{items.name}</p>
    </div>
  );
}

export default Topcategories;
