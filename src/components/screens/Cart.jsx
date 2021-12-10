import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../widgets/itemCarrito";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {

    const {itemInCart} = React.useContext(CartContext);
//{itemInCart.map( prod => <ItemCarrito item={prod} /> )}


    const onRemoveProduct = (i) => {
    };

    const onChangeProductQuantity = (index, event) => {
    };

  return (
    <div style={styles.container}>
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Productos
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

        <Box>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {itemInCart.map((product, index) => {
                return (
                <ListItem alignItems="flex-start">
                    <Grid container spacing={2}>
                        <Grid item xs={1} style={{alignItems:"flex-start"}}>    
                            <Avatar alt="Remy Sharp" style={{width:100, height:100}} src={product.foto} />
                        </Grid>

                        <Grid item 
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                            <ListItemText sx={{ width: '80%' }}
                                primary={product.nombre}
                                secondary={product.descripcion}
                                />
                        </Grid>

                        <Grid item  xs={2} >
                            
                        </Grid>

                        <Grid item xs={1} >
                            <DeleteIcon />
                        </Grid>

                    </Grid>
                        
                    
                </ListItem>
                )
            })}
            </List>
        </Box>
            

           
        </Typography>
    
    </div>
  );
}

const styles = {
  container: {
    justifyContent: "center",
  },
};
