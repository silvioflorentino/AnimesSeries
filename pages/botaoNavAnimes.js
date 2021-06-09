import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Animes from './animes';
import AnimesAcao from './animesAcao';
import AnimesRomance from './animesRomance';


const Stack = createStackNavigator();

export default function BotaoNavAnimes(){
  return(
<Stack.Navigator>
      <Stack.Screen name='Animes' component ={Animes}/>
      <Stack.Screen name='AnimesAcao' component ={AnimesAcao}/>
      <Stack.Screen name='AnimesRomance' component ={AnimesRomance}/>
</Stack.Navigator>
  );
}