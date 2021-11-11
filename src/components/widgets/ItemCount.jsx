import React from 'react';

import { ListItem,TextField } from '@mui/material';
import { stylesItemCount } from '../../styles/styles';

export default function ItemCount({stock,initial}) {

  const [cantidad, setCantidad] = React.useState(initial);

  const addCantidad = () => {
    if(cantidad < stock){
        setCantidad(cantidad+1);
    }
    
  }

  const lessCantidad = () => {
      if(cantidad > 0){
          setCantidad(cantidad-1);
      }
  }
  
  return (
        <div style={stylesItemCount.container}>
            <button style={stylesItemCount.lessButton} onClick={()=>lessCantidad()}>-</button>
            <span style={stylesItemCount.spanItemCount}>{cantidad}</span> 
            <button style={stylesItemCount.addButton} onClick={()=>addCantidad()} >+</button> 
        </div> 
  );
}

