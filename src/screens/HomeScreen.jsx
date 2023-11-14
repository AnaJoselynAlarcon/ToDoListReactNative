//Create a HomeScreen.jsx component and have it render the to do list and form.

import React from 'react';

import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(){
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk the dog',
        'Study'
      ]
      );

    //Inside the App component, create a function named addTask that will handle adding new tasks to the list:
const handleAdd = (newTask) => {
    //update state and adding to tasks array
    setTasks([...tasks, newTask]);
  }

    return(
        <NavigationContainer>
            <SafeAreaView>
                <ToDoForm onAdd={handleAdd} />
                <ToDoList tasks={tasks}/>
            </SafeAreaView>
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            />
        </NavigationContainer>


    )


}