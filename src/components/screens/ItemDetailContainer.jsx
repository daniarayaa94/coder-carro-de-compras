import * as React from "react";
import { useParams } from "react-router-dom";


import {  CircularProgress } from "@mui/material";
import { stylesItemList } from "../../styles/styles";

import ItemDetail from "../widgets/itemDetail";

import {getFirestore,doc,getDoc} from "firebase/firestore"

export default function ItemDetailContainer(props) {

  

  let { id } = useParams();
  const [productoActual, setProductoActual] = React.useState({});

  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const db = getFirestore();
    const itemsFirebase = doc(db,"items",id);

      getDoc(itemsFirebase).then((snapshot)=>{
        if(snapshot.exists()){
          setProductoActual({...snapshot.data(),id: snapshot.id}); 
          setLoading(false);
        }
        
      });

  }, []);

  return (
    loading ? (
      <div style={stylesItemList.containerLoading} >
        <CircularProgress color="secondary" />
      </div>
      ) : (
        <div>
          <ItemDetail  productoActual={productoActual} />
        </div>
          
      )
  )
}

