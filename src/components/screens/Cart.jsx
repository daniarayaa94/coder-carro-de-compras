import {  Grid,Paper, Typography, TextField,Button, CircularProgress } from "@mui/material";

import * as React from "react";
import { CartContext } from "../../context/CartContext";


import ButtonBase from '@mui/material/ButtonBase'
import { Link } from "react-router-dom";
import { stylesItemCount, stylesItemList } from "../../styles/styles";

import { getFirestore, collection, addDoc } from "firebase/firestore"

export default function Cart() {

    const {itemInCart,removeItem,modifyQuantity,clear} = React.useContext(CartContext);
    const [precioTotal , setTotal] = React.useState(0);
    const [guardandoCompra , setGuardandoCompra] = React.useState(false);

    const [nombre , setNombre] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [errorEmail , setErrorEmail] = React.useState(false);
    const [telefono , setTelefono] = React.useState("");

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
        }
    }

    
    const onSubmit = () => {

        if(!errorEmail){
            setGuardandoCompra(true);

            const order = {
                name: nombre,
                email: email,
                phone: telefono,
                items: itemInCart,
                total: precioTotal
            }
    
            const db = getFirestore();
    
            const orderCollection = collection(db,"orders");
    
            addDoc(orderCollection,order).then(({id}) => {
                clear()
                setGuardandoCompra(false)
            
            });
        }
        
    }

    const setEmailInput = (textEmail) => {
        setEmail(textEmail);
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(textEmail)) {
            setErrorEmail(true);
        }else{
            setErrorEmail(false);
        }
    }

        
  return (
    <div >
        
        { guardandoCompra ? (
        <div style={stylesItemList.containerLoading} >
          <CircularProgress color="secondary" />
          <span>Guardando Compra</span>
        </div>
        ) : (
            <div>
                <h1 style={styles.container}> Productos </h1>

                { itemInCart.length > 0 ? 
                (
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        {itemInCart.map((product, index) => {
                            
                            return (
                                <Paper key={index} sx={{ p: 2, margin: 'auto', maxWidth: "90%", flexGrow: 1,mt:2 }}>
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
                                            <div variant="body2" color="text.secondary" sx={{width:"10%"}}>
                                                
                                                
                                                <div style={stylesItemCount.container}>
                                                    <button style={stylesItemCount.lessButton} onClick={()=>lessCantidad(product.cantidad,product)}>-</button>
                                                    <span style={stylesItemCount.spanItemCount}>{product.cantidad}</span> 
                                                    <button style={stylesItemCount.addButton} onClick={()=>addCantidad(product.cantidad,product)} >+</button> 
                                                </div> 
                                            </div>
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

                        <Paper sx={{ p: 2, margin: 'auto', maxWidth: "90%", flexGrow: 1,mt:2 }}>           
                            <Grid container spacing={2}>
                                
                                <Grid item xs={12} sx={{textAlign:"center"}}>
                                    <span>Finalizar compra</span>
                                    <div>
                                        <TextField
                                            fullWidth
                                            sx={{mt:2}}
                                            label="Nombre"
                                            value={nombre}
                                            onChange={(e) => {setNombre(e.target.value)} }
                                            
                                            variant="filled"
                                            />
                                    </div>

                                    <div>
                                        <TextField
                                            fullWidth
                                            sx={{mt:2}}
                                            label="Email"
                                            value={email}
                                            onChange={(e) => {setEmailInput(e.target.value)} }
                                            error={errorEmail}
                                            variant="filled"
                                            helperText={errorEmail && email.length > 0 ? "El email ingresado es erroneo" : "" }
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            fullWidth
                                            sx={{mt:2}}
                                            value={telefono}
                                            type="number"
                                            onChange={(e) => {setTelefono(e.target.value)} }
                                            label="Telefono"
                                            variant="filled"
                                            />
                                    </div>
                                    
                                    <div>
                                        <Button sx={{mt:2}} variant="outlined" onClick={ () => {onSubmit()} } >Finalizar compra</Button>
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                ) 
                : 
                (
                    <div style={styles.container}>
                        <span>
                            No tienes productos en el carrito
                            <div><Link to="/">Ir al inicio</Link></div>
                        </span>
                    </div>
                )}
            </div>

        )}

        
    
    </div>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: 'center',
    textAlign:"center"
    
  },
};
