import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { Coffee } from "../data/coffees";



export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffee: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: { children: ReactNode }) {

  const [cartItems, setCartItems] = useState<CartItem[]>([])


  function addCoffee(coffee: CartItem) {
    const coffeeAlreadyExists = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

    if (coffeeAlreadyExists < 0) {
      const newCartItem: CartItem = {
        ...coffee,
        quantity: 1
      }
      setCartItems((prev) => [...prev, newCartItem]);
      return;
    }
    const currentCart = [...cartItems]
    currentCart[coffeeAlreadyExists].quantity += coffee.quantity;
    setCartItems(currentCart)
  }

  console.log(cartItems)



  return (
    <CartContext.Provider value={{ cartItems, addCoffee }}>
      {children}
    </CartContext.Provider>
  )
}


export function useCart() {
  const context = useContext(CartContext)

  return context;
}