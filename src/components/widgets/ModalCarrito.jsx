import * as React from 'react';

import ItemCarrito from './itemCarrito';
import { stylesShoppingCart } from '../../styles/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ModalCarrito({open,handleClose,productos}) {

  

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={stylesShoppingCart.header}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Productos
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {productos.map( prod => <ItemCarrito item={prod} /> )}
            </Typography>
          </div>
        </Box>
    </Modal>
  );
}



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 20,
    height: "55%",
    
  };
