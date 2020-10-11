/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScene from './src/scenes/home/index';
import IngredientsScene from './src/scenes/ingredients/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScene} options={{ title: 'Pagina principal' }} />
        <Stack.Screen name="Ingredients" component={IngredientsScene} options={{ title: 'Ingredientes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
