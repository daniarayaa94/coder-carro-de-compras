import React from 'react';

import {  List, ListItem } from '@mui/material';
import { productos } from '../../assets/dataArrays';
import { stylesItemList } from '../../styles/styles';
import Item from './Item';

export default function ItemList() {
  
  return (
    <div style={stylesItemList.background}>
      <h1> Nuevos productos</h1>
      <List style={stylesItemList.flexContainer}>

        {productos.map((prod) => (
          <Item prod={prod}/>
        ))}

      </List>
    </div>
  );
}

