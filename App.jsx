/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App(){


//Create a stack navigator:
const Stack = createStackNavigator();




  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
