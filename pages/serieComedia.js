import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function SerieComedia(props){
return(
      <View  style={styles.container}>
         
 
          <Text style={styles.titulo}> Séries </Text>

          <Text style={styles.principal}> Série de Comédia</Text>

<Image style={styles.img} source={{ uri:'https://3.bp.blogspot.com/-_TkG1vM9eFc/XCpryef2bmI/AAAAAAAAMws/tCqhW0udtQILWg9i5SncWISHJqiWL-f-QCEwYBhgL/s1600/maxresdefault.jpg',}}/>
<Text style={styles.animes}> Brooklyn Nine-Nine</Text>
 <Separator />
<Image style={styles.img} source={{ uri:'https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg',}}/>           
 <Text style={styles.animes}> The Big Bang theory</Text>       
     
      </View>
  
);
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#a93423'
},
titulo:{
  fontSize: 30,
  color: '#4455ff',
  paddingBottom: 10,
}, 
principal:{
  textAlign: 'center',
  margin: 10,
  fontSize: 20,
  paddingBottom: 20

},
img:{
  width: 190,
  height: 140,
  borderRadius: 10,
},
separator: {
    marginVertical: 18,
    borderBottomColor: '#737373',

  },
  animes:{
  fontSize: 20,
  color: '#fff',
 
},

})