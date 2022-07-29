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
    const currentCart = [...cartItems]
    const coffeeInCart = currentCart.findIndex(c => c.id === coffee.id)
    if (coffeeInCart < 0) {
      const updatedCart = [...currentCart, coffee];
      setCartItems(updatedCart)
    } else {
      const coffeeToUpdateQuantity = currentCart[coffeeInCart]
      const updatedCoffee = { ...coffeeToUpdateQuantity, quantity: coffee.quantity }
      let cart = [...cartItems]
      cart[coffeeInCart] = updatedCoffee;
      setCartItems(cart);
    }
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