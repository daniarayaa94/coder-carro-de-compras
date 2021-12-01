import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [itemInCart, setItemInCart] = useState([])

    const addToCart = (item) => {
        setItemInCart([...itemInCart,item])
        console.log(itemInCart.length)
    }


    return (
        <CartContext.Provider value={{itemInCart,setItemInCart,addToCart}}>
            {children}
        </CartContext.Provider>
    )


}