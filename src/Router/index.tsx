import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { SCREENS } from './screens';
import Details from '../screens/Details';
import { getNameParam } from './utils';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.Details}
        component={Details}
        options={({route}) => ({
          title: `Details: ${getNameParam(route.params)}`,
        })}
      />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
