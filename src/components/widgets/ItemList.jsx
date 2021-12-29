import React from "react";

import { CircularProgress,ImageList} from "@mui/material";
import { stylesItemList } from "../../styles/styles";
import Item from "./Item";
import {where,query,getFirestore,getDocs,collection} from "firebase/firestore"

export default function ItemList({filtro,idCategoria}) {
  const [productosApi, setproductosApi] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  
  React.useEffect(() => {
    setLoading(true)
    const db = getFirestore();
      
      const itemsFirebase = collection(db,"items");
      if(filtro === "productos"){
        getDocs(itemsFirebase).then((snapshot)=>{
          setproductosApi(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}))); 
          setLoading(false);
        });
      }else{
        const itemsFirebase2 = query(itemsFirebase,where("categoria","==",idCategoria));

        getDocs(itemsFirebase2).then((snapshot)=>{
          setproductosApi(snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}))); 
          setLoading(false);
        });

      }
      
  }, [idCategoria]);



  return (
    <div style={stylesItemList.background}>
      { loading ? (
        <div style={stylesItemList.containerLoading} >
          <CircularProgress color="secondary" />
        </div>
        ) : (
          <div >
            <h1> Nuevos productos </h1>

            <div style={stylesItemList.root}>

            { productosApi.length > 0 ? (
              <ImageList spacing={1} rowHeight={160} cols={5} style={stylesItemList.flexContainer}>
                {productosApi.map((prod) => (
                  <Item key={prod.id} prod={prod} />
                ))}
              </ImageList>
            ) : (
              <div> No existen productos para mostrar </div>
            )}
            </div>
          </div>
        ) 
      }
    </div>
  );
}
