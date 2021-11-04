import React from 'react';

import {  List, ListItem } from '@mui/material';
import { productos } from '../../assets/dataArrays';

const flexContainer = {
    display: 'inline-flex',
    flexDirection: 'row',
    background:"#80808014",
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%"
  };

export default function HorizontalList() {
  

  return (
    <div style={styles.background}>
      <h1> Nuevos productos</h1>
      <List style={flexContainer}>

        {productos.map((prod) => (
          <ListItem  style={styles.container}>
              <div >
                <img src={prod.photo} alt={prod.id} style={styles.imgStyle}/>
                <h1 style={styles.title}>{prod.nombre}</h1>
                <button>Agregar al carrito</button>
              </div>
            </ListItem>
        ))}

      </List>
    </div>
  );
}


const styles = {
    imgStyle: {
        
        height: 135
    },
    background: {
        justifyContent:"center",
        alignItems: 'center',
        textAlign:"center"
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      container :{
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex:1
     },title :{
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex:1,
        textAlign:"center"
     }
}