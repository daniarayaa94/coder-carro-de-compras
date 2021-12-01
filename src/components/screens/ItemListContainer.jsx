import * as React from "react";
import { useParams } from "react-router";

import ItemList from "../widgets/ItemList";
import SlideView from "../widgets/SlideView";

export default function ItemListContainer({tipoFiltro}) {

  let { id } = useParams();

  return (
    <div style={styles.container}>
      <SlideView></SlideView>
      <ItemList filtro={tipoFiltro} idCategoria={id}/>
    </div>
  );
}

const styles = {
  container: {
    justifyContent: "center",
  },
};
