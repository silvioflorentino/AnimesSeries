import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function Animes(props){
return(
      <View  style={styles.container}>
         
 
          <Text style={styles.titulo}> Animes </Text>

          <Text style={styles.principal}> Animes de Ação</Text>

<Image style={styles.img} source={{ uri:'https://s.aficionados.com.br/imagens/image-1767_cke.jpg',}}/>
<Text style={styles.animes}> Demon Slayer</Text>
 <Separator />
<Image style={styles.img} source={{ uri:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xSctyYHNUQJqniZ06VOzi1rPlPp.jpg',}}/>           
 <Text style={styles.animes}> Attack on Titan</Text>       
     
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