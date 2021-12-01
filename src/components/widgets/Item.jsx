import React, { useState } from "react";


import { stylesItemProd } from "../../styles/styles";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Item({ prod }) {


  const [itemCountComponentVisibility, setItemCountComponentVisibility] = useState(false);
  
  const onAdd = () => {
    
  };


  const onAddCart = () => {
    setItemCountComponentVisibility(true)
  };


  return (
    
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Link to={`/item/${prod.id}`}>
              <img src={prod.photo} alt={prod.id} style={stylesItemProd.imgStyle} />
            </Link>
            
            <Typography variant="h5" component="div">
            {prod.nombre}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Stock disponible {prod.stock}
            </Typography>
          </CardContent>
          <CardActions style={{display:"flex",flexDirection:"column"}}> 
            <ItemCount style={{flex:1}} item={prod} initial={1} />
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
    
  );
}
