import { createContext,useEffect,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [itemInCart, setItemInCart] = useState([])

    const isInCart = (id) => {
        return itemInCart.find((element) => {
            return element.id === id;
          })
    }

    const clear = () => {
        setItemInCart([])
        
    }

    const removeItem = (itemId) => {
        setItemInCart(itemInCart.filter((element) => {
            return element.id !== itemId;
          }))
        
    }

    const addToCart = (item,quantity) => {

        if(isInCart(item.id) ){
            alert("El item ya existe dentro del carrito")
        }else{
            setItemInCart([...itemInCart,{...item,cantidad:quantity}])
        }
    }


    return (
        <CartContext.Provider value={{itemInCart,setItemInCart,addToCart,clear,removeItem}}>
            {children}
        </CartContext.Provider>
    )


}