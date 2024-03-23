import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicatorComponent } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Information from './screens/Information';
import Login from './screens/Login';
import HomeNavigator from './Navigation/HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Navigation/RootNavigator';
import InfoNavigator from './Navigation/InfoNavigator';


export default function App()
{
  const Stack=createNativeStackNavigator();
  const Tab=createBottomTabNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} 
     
         
          />
          <Stack.Screen name="RootNavigator" component={RootNavigator} 
      
         
          />
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} 
      
         
          />
      <Stack.Screen name="Home" component={Home} 
      
         
          />
      <Stack.Screen name="Information" component={Information} 
       />
       <Stack.Screen name="InfoNavigator" component={InfoNavigator} 
       options={() => ({
        
        tabBarButton: true,
      })}/>
      
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}