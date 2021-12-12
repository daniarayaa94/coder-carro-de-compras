import { Avatar, Grid,Paper, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../widgets/itemCarrito";
import DeleteIcon from '@mui/icons-material/Delete';

import ButtonBase from '@mui/material/ButtonBase'
import { Link } from "react-router-dom";
import { stylesItemCount } from "../../styles/styles";

export default function Cart() {

    const {itemInCart,removeItem,modifyQuantity} = React.useContext(CartContext);
    const [precioTotal , setTotal] = React.useState(0);

    const numberFormat = (value) => new Intl.NumberFormat('de-DE').format(value);

    React.useEffect(() => {
        
        const sum = itemInCart.reduce((result, item) => result + (item.cantidad*item.precio), 0);
        
        setTotal(sum)
        
        
    }, [itemInCart])


    const addCantidad = (cantidad,prod) => {
        if(cantidad < prod.stock){
            modifyQuantity(prod.id, (prod.cantidad+1));
        }
        
    }

    const lessCantidad = (cantidad,prod) => {
        if(cantidad > 1){
            modifyQuantity(prod.id, (prod.cantidad-1));
        }else{
            alert("debes remover el producto")
        }
    }
    
    

    
  return (
    <div >
        
        <h1 style={styles.container}> Productos </h1>

        { itemInCart.length > 0 ? 
        (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {itemInCart.map((product, index) => {
                    
                    return (
                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: "90%", flexGrow: 1,mt:2 }}>
                            <Grid container spacing={2}>
                                <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <img alt="complex" style={{width:100, height:100}} src={product.foto}  />
                                </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {product.nombre}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {product.descripcion}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{width:"10%"}}>
                                        
                                        
                                        <div style={stylesItemCount.container}>
                                            <button style={stylesItemCount.lessButton} onClick={()=>lessCantidad(product.cantidad,product)}>-</button>
                                            <span style={stylesItemCount.spanItemCount}>{product.cantidad}</span> 
                                            <button style={stylesItemCount.addButton} onClick={()=>addCantidad(product.cantidad,product)} >+</button> 
                                        </div> 
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} onClick={() => { removeItem(product.id) }} variant="body2">
                                        Eliminar del carrito
                                    </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{textAlign:"right"}}>
                                    <Typography variant="subtitle1" component="div">
                                        Precio por unidad ${numberFormat(product.precio)}
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        Total ${numberFormat(product.precio * product.cantidad)}
                                    </Typography>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        )
                })}   


                <Paper sx={{ p: 2, margin: 'auto', maxWidth: "90%", flexGrow: 1,mt:2 }}>           
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{textAlign:"right"}}>
                            <Typography variant="subtitle1" component="div">
                                Total ${numberFormat(precioTotal)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Typography>
        ) 
        : 
        (
            <div style={styles.container}>
                <p>
                    No tienes productos en el carrito
                    <div><Link to="/">Ir al inicio</Link></div>
                </p>
            </div>
        )}

        
    
    </div>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    justifyContent:"center",
    alignItems: 'center',
    textAlign:"center"
    
  },
};
