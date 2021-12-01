export const stylesItemList = {
    flexContainer:{
        
        flexWrap: "nowrap",
        overflowX: "scroll",
    },
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    containerLoading:{
        height: 500,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        
      },
      background: {
          justifyContent:"center",
          alignItems: 'center',
          textAlign:"center"
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
    };
  
    export const stylesItemProd = {
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
            justifyContent: 'center',
            alignItems: 'center',
            background:"#80808014",
            margin:10,
            flex:1}
        ,title :{
              justifyContent: 'center',
              alignItems: 'center',
              flex:1,
              textAlign:"center"
           }
        };
      
  
    export const stylesItemCount = {
          
        container :{
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            textAlign:"center",
            background:"#d3d3d36e",
            display:"flex",
            borderColor:"black",
            borderRadius:25,
            marginBottom: 10
        },  
        spanItemCount :{
              width:"80%",
            fontSize:23
           },
           
        addButton :{
            width:"10%",
            background:"transparent",
            padding: 0,
            border: "none",
            
            marginRight:5,
            fontSize:23
            
           },
        lessButton :{
            width:"10%",
            padding: 0,
            border: "none",
            marginLeft:5,
            background: "none",
            fontSize:33
           }
        };
      
      