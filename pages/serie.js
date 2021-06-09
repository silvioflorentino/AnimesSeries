import * as React from 'react';
import {Text, View, StyleSheet,Image,Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function Serie(props){
return(
      <View  style={styles.container}>
         <Image style={styles.img} source={{ uri:'https://s2.glbimg.com/476xiyzHwobzomhiO6QZ8ZaZPCM=/362x536/https://s2.glbimg.com/gw3G9SRdfhWZbNxnMuwbznGiAW0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/s/Y/z9FwyXQjq1flWRIm3mUA/2020-726-series-warner-the-big-bang-theory-poster.jpg',}}/>
 
          <Text style={styles.titulo}> Série </Text>

          <Text style={styles.principal}> Séries de bom gosto.</Text>

          <Button 
          color="#F0E68C"
          title="Comédia"
          onPress={()=>{props.navigation.navigate('SerieComedia')}}
          />
 <Separator />
             <Button
             color="#A9A9A9"
          title="Suspense"
          onPress={()=>{props.navigation.navigate('SerieSuspense')}}
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