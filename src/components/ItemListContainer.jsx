import * as React from 'react';

import HorizontalList from './widgets/HorizontalList';
import SlideView from './widgets/SlideView';

export default function ItemListContainer(props) {
  return (
    <div style={styles.container}>
        <SlideView></SlideView>
        <HorizontalList/>
    
    </div>
  );
}


const styles = {
    container: {
        justifyContent: 'center',
    }
}