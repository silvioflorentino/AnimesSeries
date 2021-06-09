import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function Animes(props){
return(
      <View  style={styles.container}>
         <Image style={styles.img} source={{ uri:'https://s.aficionados.com.br/imagens/image-1767_cke.jpg',}}/>
 
          <Text style={styles.titulo}> Animes </Text>

          <Text style={styles.principal}> Animes de bom gosto.</Text>

          <Button 
          color="#f94f"
          title="Romance"
          onPress={()=>{props.navigation.navigate('AnimesRomance')}}
          />
 <Separator />
             <Button
             color="#f94f"
          title="Ação"
          onPress={()=>{props.navigation.navigate('AnimesAcao')}}
          />
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
  height: 140,
  borderRadius: 10,
},
separator: {
    marginVertical: 18,
    borderBottomColor: '#737373',

  },

})