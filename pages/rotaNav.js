import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Home from './home';
import Animes from './animes';
import AnimesAcao from './animesAcao';
import AnimesRomance from './animesRomance';
import Serie from './serie';
import SerieComedia from './serieComedia';
import SerieSuspense from './serieSuspense';

import BotaoNavAnimes from './botaoNavAnimes';
import BotaoNavSerie from './botaoNavSerie';

const Tab = createBottomTabNavigator();

export default function RotaNav(){
  return(
<Tab.Navigator

initialRouteName = "Home"
tabBarOptions={{
  activeTintColor: "#B0E0E6",
}}
>
    <Tab.Screen 
    name="Home"
    component={Home}
    options ={{
      tabBarLabel:'Home',
      tabBarIcon:({color, size}) => <MaterialCommunityIcons name="home-circle" color={color} size={size}/>
    }}
    />

        <Tab.Screen 
    name="Animes"
    component={BotaoNavAnimes}
    options ={{
      tabBarLabel:'Animes',
      tabBarIcon:({color, size}) => <MaterialCommunityIcons name="baby-face" color={color} size={size}/>
    }}
    />

        <Tab.Screen 
    name="Serie"
    component={BotaoNavSerie}
    options ={{
      tabBarLabel:'Serie',
      tabBarIcon:({color, size}) => <MaterialCommunityIcons name="projector-screen" color={color} size={size}/>
    }}
    />

</Tab.Navigator>
  );
}