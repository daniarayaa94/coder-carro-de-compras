import * as React from "react";
import { productos } from "../../assets/dataArrays";
import { useParams } from "react-router-dom";


import { Button, CircularProgress } from "@mui/material";
import { stylesItemList } from "../../styles/styles";

import ItemDetail from "../widgets/itemDetail";
import { CartContext } from "../../context/CartContext";

export default function ItemDetailContainer(props) {

  

  let { id } = useParams();
  const [productoActual, setProductoActual] = React.useState({});

  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    getItem
      .then((response) => {
        setProductoActual(response);
        setLoading(false)
      })
      .catch((error) =>
        alert("Estamos presentando problemas. Ingrese más tarde.")
      );
  }, []);



  

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      let prodFind = productos.filter((prod) => id == prod.id);
      resolve(prodFind[0]);
    }, 2000);
  });

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

const styles = {
  container: {
    justifyContent: "center",
  },
};