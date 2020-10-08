import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";

const App = createStackNavigator({
  Home: Home,
});

export default createAppContainer(App);