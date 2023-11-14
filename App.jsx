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
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App(){
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


  return (
    <SafeAreaView>
      <ToDoForm onAdd={handleAdd} />
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  );
}



export default App;
