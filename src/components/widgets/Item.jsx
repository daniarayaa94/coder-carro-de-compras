import React from 'react';

import { ListItem,TextField } from '@mui/material';
import { stylesItemProd } from '../../styles/styles';
import ItemCount from './ItemCount';


export default function Item({prod}) {

  const [cantidad, add] = React.useState(false);
  
  return (
    <ListItem  style={stylesItemProd.container}>
        <div >
        <img src={prod.photo} alt={prod.id} style={stylesItemProd.imgStyle}/>
        <h1 style={stylesItemProd.title}>{prod.nombre}</h1>
        <h1 style={stylesItemProd.title}>{prod.stock}</h1>
        <ItemCount stock={prod.stock} initial={1}/>
          <div style={{ ...stylesItemProd.container,display: "flex" }}>
            <button >Agregar al carrito</button>
          </div>
        </div>
    </ListItem>
  );
}

