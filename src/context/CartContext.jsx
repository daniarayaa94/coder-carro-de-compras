import { createContext,useEffect,useState } from "react";
import {getFirestore,doc,getDoc,getDocs,collection} from "firebase/firestore"

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const db = getFirestore();
    const [itemInCart, setItemInCart] = useState([])
    const [categorias, setCategorias] = useState([])



    useEffect(() => {
  
        const itemsFirebase = collection(db,"categorias");
  
        getDocs(itemsFirebase).then((snapshot)=>{
            setCategorias(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}))); 
        });
       
    }, []);

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
        <CartContext.Provider value={{categorias,itemInCart,setItemInCart,addToCart,clear,removeItem}}>
            {children}
        </CartContext.Provider>
    )


}