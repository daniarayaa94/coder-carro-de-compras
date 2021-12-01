import React from "react";

import { stylesItemProd } from "../../styles/styles";

import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";

export default function ItemDetail({ productoActual }) {
  return (

        <Box sx={{ display:"flex",flexDirection:"column" }}>
            <Card sx={{ maxWidth: 575,alignSelf:"center",mt:10 }} variant="outlined">
            <React.Fragment>
                <CardContent style={{ display:"flex",flexDirection:"column" }} >
                
                <img src={productoActual.photo} alt={productoActual.id} style={{...stylesItemProd.imgStyle,width:200,flex:1,alignSelf: "center"}} />

                <Typography variant="h5" style={{flex:1,alignSelf: "center"}} component="div">
                {productoActual.nombre}
                </Typography>
                <Typography  style={{flex:1,alignSelf: "center"}} color="text.secondary">
                ${productoActual.precio}
                </Typography>
                <Typography sx={{ fontSize: 14,flex:1,alignSelf: "center" }} color="text.secondary" gutterBottom>
                {productoActual.descripcion}
                </Typography>
                <Typography  style={{flex:1,alignSelf: "center"}} color="text.secondary">
                Stock disponible {productoActual.stock}
                </Typography>
                </CardContent>
                <CardActions style={{display:"flex",flexDirection:"column"}}>
                  <ItemCount style={{flex:1}} item={productoActual} initial={1} />
                </CardActions>
            </React.Fragment>
            </Card>
        </Box>
    
  );
}
