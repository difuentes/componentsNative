import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { Animacion101 } from '../screens/Animacion101';
import { Animacion102 } from '../screens/Animacion102';
import { SwitchScreem } from '../screens/SwitchScreem';
import { AlertaScreem } from '../screens/AlertaScreem';

const Stack = createStackNavigator();

export const  Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animacion101" component={Animacion101 } />
      <Stack.Screen name="Animacion102" component={Animacion102} />
      <Stack.Screen name="SwitchScreem" component={SwitchScreem} />
      <Stack.Screen name="AlertaScreem" component={AlertaScreem} />
    </Stack.Navigator>
  );
}

