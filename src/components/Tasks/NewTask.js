import React from 'react';
import { useSelector } from "react-redux";
import MyNewTask from './MyNewTask';
function NewTask(props) {
    //get state from redux store
  let tasks = useSelector(state => state.tasks);
  console.log("new task component",tasks)
    return (
        <div>
            <MyNewTask></MyNewTask>
        </div>
    );
}

export default NewTask;