import * as React from 'react';

import ItemList from './widgets/ItemList';
import SlideView from './widgets/SlideView';

export default function ItemListContainer(props) {
  return (
    <div style={styles.container}>
        <SlideView></SlideView>
        <ItemList/>
    
    </div>
  );
}


const styles = {
    container: {
        justifyContent: 'center',
    }
}