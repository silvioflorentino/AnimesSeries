import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function SerieSuspense(props){
return(
      <View  style={styles.container}>
          <Text style={styles.titulo}> Séries </Text>

          <Text style={styles.principal}> Série de Suspense</Text>

<Image style={styles.img} source={{ uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/American_Horror_Story.svg/1200px-American_Horror_Story.svg.png'}}/>
<Text style={styles.animes}> American Horror Story</Text>
 <Separator />
<Image style={styles.img} source={{ uri:'https://th.bing.com/th/id/OIP.vxck1xWD3U2e--TczTdPTwHaHa?pid=ImgDet&rs=1'}}/>           
 <Text style={styles.animes}> The Witcher</Text>       
     
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