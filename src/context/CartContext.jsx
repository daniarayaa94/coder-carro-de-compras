import { createContext,useEffect,useState } from "react";
import {getFirestore,getDocs,collection} from "firebase/firestore"

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [itemInCart, setItemInCart] = useState([])
    const [categorias, setCategorias] = useState([])
    
    
    
    useEffect(() => {
        
        const db = getFirestore();
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

    const getItem = (id) => {
        return itemInCart.find((element) => {
            if(element.id === id){
                return element
            }
            return false;
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
    
    const modifyQuantity = (itemId, quantity) => {
        
        //const item = getItem(itemId);

        const newList = itemInCart.map((item) => {
            if (item.id === itemId) {
           
                const updatedItem = {
                    ...item,
                    cantidad: quantity,
                };
    
                return updatedItem;
            }
    
            return item;
        });
        
        setItemInCart(newList);
          
        
    }

    const addToCart = (item,quantity) => {

        if( !isInCart(item.id) ){
            setItemInCart([...itemInCart,{...item,cantidad:quantity}])
        }
    }


    return (
        <CartContext.Provider value={{categorias,itemInCart,setItemInCart,addToCart,clear,removeItem,getItem,modifyQuantity}}>
            {children}
        </CartContext.Provider>
    )


}