/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../../views/containers/Splash';

import Home from '../../views/containers/Home';
import Albums from '../../views/containers/Albums';
import AlbumDetails from '../../views/containers/AlbumDetails';

const Stack = createNativeStackNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" options={{headerShown: false}}>
          {props => <Splash {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Albums" options={{headerShown: false}}>
          {props => <Albums {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AlbumDetails" options={{headerShown: false}}>
          {props => <AlbumDetails {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavContainer;
