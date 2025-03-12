import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Screens from './Screens';
import Details from '../screens/Details';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Details}
        component={Details}
        options={({route}) => ({
          title: `Details: ${route.params.name}`,
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
