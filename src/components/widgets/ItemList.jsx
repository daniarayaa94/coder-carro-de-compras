import React from "react";

import { CircularProgress,ImageList} from "@mui/material";
import { productos } from "../../assets/dataArrays";
import { stylesItemList } from "../../styles/styles";
import Item from "./Item";

export default function ItemList({filtro,idCategoria}) {
  const [productosApi, setproductosApi] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  
  React.useEffect(() => {
      setLoading(true)
      
      getProductos
      .then((response) => {
          console.log(filtro)
          if(filtro === "productos"){
            setproductosApi(response); 
            setLoading(false);
          }else{
            console.log(filterProductosPorCategoria(response))
            setproductosApi(filterProductosPorCategoria(response)); 
            setLoading(false);
          }
          
        })
        .catch((error) =>
          alert("Estamos presentando problemas. Ingrese más tarde.")
        );

       

  }, [idCategoria]);

  const getProductos = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
  });


  function filterProductosPorCategoria(response) {
    let prods = response.filter(a => idCategoria == a.categoria)
    if (prods.length > 0)
        return prods

  }

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
              <ImageList spacing={1} rowHeight={160} cols={5} style={stylesItemList.flexContainer}>
                {productosApi.map((prod) => (
                  <Item prod={prod} />
                ))}
              </ImageList>
            </div>
          </div>
        ) 
      }
    </div>
  );
}
