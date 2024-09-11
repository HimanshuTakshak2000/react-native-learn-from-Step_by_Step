import React from 'react';
import HomeScreen from './Screen/Home';
import UserScreen from './Screen/User'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  /* Redux :- 
  Note :- 1) We have to install 3 packages i.e redux, react-redux and @reduxjs/toolkit to start with redux in react-native.
          2) 
  */
  
 
        
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
