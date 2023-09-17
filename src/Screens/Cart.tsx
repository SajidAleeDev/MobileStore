function Cart() {
  const ResponseLocalStorage = [
    {
      id: 1,
      name: "Iphone 12",
      price: "1000",
      image:
        "https://www.gizmochina.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Max-500x500.jpg",
    },
  ];

  // console.log(getItemInLocalStorage(), "cart");

  return (
    // <div className="h-[80vh] container">
    //   <h1 className="text-4xl">Cart</h1>
    //   <div className=" overflow-y-auto">
    //     {ResponseLocalStorage.map((items: any) => {
    //       return (
    //         <div className="flex items-center space-x-4">
    //           <img
    //             src={items.image}
    //             alt="cart"
    //             className="h-[100px] w-[100px]"
    //           />
    //           <div className="flex flex-col">
    //             <p className="text-[20px]">{items.name}</p>
    //             <p className="text-[20px]">{items.price}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div>
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
