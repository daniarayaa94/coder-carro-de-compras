import * as React from 'react';
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ModalCarrito from './ModalCarrito';

export default function CartWidget() {

    const [itemsEnCarrito, setItemsEnCarrito] = React.useState(7);
  
    const [open, setOpen] = React.useState(false);
    const mostraItems = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    //setItemsEnCarrito(productos.length)

  return (

    <div >
        <Badge badgeContent={itemsEnCarrito} color="success" >
        <ShoppingCartIcon  onClick={mostraItems} color="white" />

        <ModalCarrito open={open} handleClose={handleClose} />

        </Badge>
    </div>
  );
}


