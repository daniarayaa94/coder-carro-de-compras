import React from 'react';

import {  List, ListItem } from '@mui/material';
import { productos } from '../../assets/dataArrays';
import { stylesItemList } from '../../styles/styles';
import Item from './Item';

export default function ItemList() {
  

  const [productosApi, setproductosApi] = React.useState([]);

  React.useEffect(() => {
    getProductos.then(response=>{
      setproductosApi(response)
    }).catch(error => alert("Estamos presentando problemas. Ingrese más tarde."))
  }, []);

  const getProductos = new Promise((resolve) => {
    setTimeout(()=>{
      resolve(productos)
    },2000)
  })

  return (
    <div style={stylesItemList.background}>
      <h1> Nuevos productos</h1>
      <List style={stylesItemList.flexContainer}>

        {productosApi.map((prod) => (
          <Item prod={prod}/>
        ))}

      </List>
    </div>
  );
}

