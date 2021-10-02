import React from 'react';
import {useSelector} from 'react-redux'
function MyNewTask(props) {
      //get state from redux store
  let tasks = useSelector(state => state.tasks);
  console.log("MyNewTask component",tasks)
    return (
        <div>
            
        </div>
    );
}

export default MyNewTask;