import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Serie from './serie';
import SerieComedia from './serieComedia';
import SerieSuspense from './serieSuspense';

const Stac = createStackNavigator();

export default function BotaoNavSerie(){
  return(
<Stac.Navigator>
      <Stac.Screen name='Serie' component ={Serie}/>
      <Stac.Screen name='SerieComedia' component ={SerieComedia}/>
      <Stac.Screen name='SerieSuspense' component ={SerieSuspense}/>
</Stac.Navigator>
  );
}