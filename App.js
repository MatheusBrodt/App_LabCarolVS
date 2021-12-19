import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './FrontEnd/Login';
import F_Acess from './FrontEnd/FisrtAcess';
import Rec from './FrontEnd/Rec_Pass';
import M_View from './FrontEnd/MasterView';
import Stock_View from './FrontEnd/Stock';
import Serv_View from './FrontEnd/Services';
import Vta_View from './FrontEnd/VTAs';
import Late_View from './FrontEnd/Late';

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginView'>
        <Stack.Screen name='LoginView' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='First_Acess' component={F_Acess} options={{headerShown:false}}/>
        <Stack.Screen name='Rec_Pass' component={Rec} options={{headerShown:false}}/>
        <Stack.Screen name='Master_View' component={M_View} options={{headerShown:false}}/>
        <Stack.Screen name='Stock_View' component={Stock_View} options={{headerShown:false}}/>
        <Stack.Screen name='Serv_View' component={Serv_View} options={{headerShown:false}}/>
        <Stack.Screen name='Vta_View' component={Vta_View} options={{headerShown:false}}/>
        <Stack.Screen name='Late_View' component={Late_View} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}