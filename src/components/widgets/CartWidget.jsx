import * as React from 'react';
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ModalCarrito from './ModalCarrito';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {

   const {itemInCart} = React.useContext(CartContext);

    const [itemsEnCarrito, setItemsEnCarrito] = React.useState(7);
  
    const [open, setOpen] = React.useState(false);
    const mostraItems = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (

    <div >
        <Badge badgeContent={itemInCart.length} color="success" >
        <ShoppingCartIcon onClick={mostraItems}  color="white" />

        <ModalCarrito productos={itemInCart} open={open} handleClose={handleClose} />

        </Badge>
    </div>
  );
}


