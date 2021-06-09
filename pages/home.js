import * as React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

export default function Home(){
return(
      <View style={styles.container}>
       <Image style={styles.img} source={require('../dinosaur-5178645_1280.png')}/>
 
          <Text style={styles.titulo}> Bom te ver aqui ! </Text>

          <Text style={styles.principal}> Nosso App é para vc que gosta de Animes e Séries de bom gosto.</Text>
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
  margin: 20,
  fontSize: 20,

},
img:{
  width: 190,
  height: 140
}

})