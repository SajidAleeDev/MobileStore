// ItemContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ItemContext = createContext<any>(null);

export const useItemContext = () => useContext(ItemContext);

export function ItemProvider({ children }: any) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const selectItem = (item: any) => {
    setSelectedItem(item);
  };

  const addToCart = (item: any) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity++;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: any) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity--;

      if (updatedCart[existingItemIndex].quantity <= 0) {
        updatedCart.splice(existingItemIndex, 1);
      }

      setCartItems(updatedCart);
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    console.log(totalPrice, "totalPrice");

    setTotalPrice(totalPrice);
  }, [cartItems]);

  console.log(cartItems, "cartItems");

  return (
    <ItemContext.Provider
      value={{
        selectedItem,
        selectItem,
        addToCart,
        removeFromCart,
        cartItems,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
