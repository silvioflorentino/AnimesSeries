import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function Romance(props){
return(
      <View  style={styles.container}>
         
 
          <Text style={styles.titulo}> Animes </Text>

          <Text style={styles.principal}> Animes de Romance</Text>

<Image style={styles.img} source={{ uri:'https://static.cinebel.be/img/movie/poster/full/1017364_fr_your_name_1511451802582.jpg',}}/>
<Text style={styles.animes}> Your Name</Text>
 <Separator />
<Image style={styles.img} source={{ uri:'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-CnzR2zVpdxtR.png',}}/>           
 <Text style={styles.animes}> Your lie in april</Text>       
     
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