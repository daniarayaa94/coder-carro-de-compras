import * as React from 'react';
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

   const {itemInCart} = React.useContext(CartContext);
  
    
    
    //<ModalCarrito productos={itemInCart} open={open} handleClose={handleClose} />
  return (

    <div >
        <Badge badgeContent={itemInCart.length} color="success" >
        <Link to="cart"><ShoppingCartIcon   color="white" /></Link>
        </Badge>
    </div>
  );
}


