import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Import your screen components
import HomeScreen from '../screens/HomeScreen'; 
import DetailsScreen from '../screens/DetailsScreen';
import SigninScreen from '../screens/signinpage';
import LoginScreen from '../screens/loginPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={DetailsScreen} />

    {/* Add more tab screens here */}
  </Tab.Navigator>
);
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
