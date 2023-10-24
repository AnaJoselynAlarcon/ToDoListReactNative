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
]
);
  return (
    <SafeAreaView>
      <ToDoForm/>
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  );
}



export default App;
