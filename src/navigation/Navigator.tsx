import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { Animacion101 } from '../screens/Animacion101';
import { Animacion102 } from '../screens/Animacion102';
import { SwitchScreem } from '../screens/SwitchScreem';
import { AlertaScreem } from '../screens/AlertaScreem';
import { FormInput } from '../screens/FormInput';
import { PullToRefresh } from '../screens/PullToRefresh';
import { SectionListView } from '../screens/SectionListView';
import { ModalView } from '../screens/ModalView';
import { InfiniteScroll } from '../screens/InfiniteScroll';

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
      <Stack.Screen name="FormInput" component={FormInput} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SectionListView" component={SectionListView} />
      <Stack.Screen name="ModalView" component={ModalView} />
      <Stack.Screen name="InfiniteScroll" component={InfiniteScroll} />
    </Stack.Navigator>
  );
}

