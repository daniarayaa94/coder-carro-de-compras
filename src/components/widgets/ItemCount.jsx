import React, { useState } from 'react';

import { stylesItemCount } from '../../styles/styles';
import { Button } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemCount({initial,item}) {

  const {itemInCart,getItem} = React.useContext(CartContext);
  const [cantidad, setCantidad] = React.useState(initial);
  const [itemCountComponentVisibility, setItemCountComponentVisibility] = useState(false);
  

  const {addToCart} = React.useContext(CartContext);
   
  React.useEffect(() => {
    const itemFromCart = getItem(item.id)
    if(itemFromCart){
      setItemCountComponentVisibility(true)
    }

  }, [itemInCart])

  const onAddCart = () => {
  
    addToCart(item,cantidad)
  };

  const addCantidad = () => {
    if(cantidad < item.stock){
        setCantidad(cantidad+1);
    }
    
  }

  const lessCantidad = () => {
      if(cantidad > 0){
          setCantidad(cantidad-1);
      }
  }
  
  return (
      <div>
        
        { !itemCountComponentVisibility ? (
            <div>
              <div style={stylesItemCount.container}>
                <button style={stylesItemCount.lessButton} onClick={()=>lessCantidad()}>-</button>
                <span style={stylesItemCount.spanItemCount}>{cantidad}</span> 
                <button style={stylesItemCount.addButton} onClick={()=>addCantidad()} >+</button> 
            </div> 
              <Button onClick={()=>{onAddCart()}} style={{flex:1}} variant="outlined">Agregar al carrito</Button>
            </div>
          ) : (
            <div>
              <Link to="/cart">
                <Button style={{flex:1}} color="success" variant="outlined">Terminar compra</Button>
              </Link>
            </div>
          )
        }
     </div>
    );
}

