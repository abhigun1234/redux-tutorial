import React from 'react';
import "./Tasks.css";
import Collapsible from "../Collapsible/Collapsible";
import { useState } from "react";
//import actions from "../../actions";
import { useSelector } from "react-redux";
import NewTask from './NewTask';

function Tasks() {
  //get state from redux store
  let tasks = useSelector(state => state.tasks);
  console.log("tasks",tasks)

  let [ isNewTaskOpen, setIsNewTaskOpen ] = useState(false);

  let onSaveClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  let onCancelClick = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container">
            {!isNewTaskOpen? <button className="button create-button" onClick={() => { setIsNewTaskOpen(!isNewTaskOpen); }}>
              <i className="fa fa-calendar-plus"></i>
              &nbsp;&nbsp;
              Create
            </button>: null}
          </div>
        </div>

        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">Task Title:</label>
              <div className="form-input">
                <input type="text" placeholder="Task Title" className="text-box" id="task-title" />
              </div>
              
            </div>
            {/* form group ends */}

            {/* form group starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-date-time">Task Date and Time:</label>
              <div className="form-input">
                <input type="datetime-local" placeholder="Task Date and Time" className="text-box" id="task-date-time" />
              </div>
            </div>
            {/* form group ends */}

            <div className="button-group">
              <button className="button save-button" onClick={() => { onSaveClick(); }}>
                <i className="fa fa-save"></i>&nbsp;&nbsp;
                Save Task
              </button>

              <button className="button cancel-button" onClick={() => { onCancelClick(); }}>
                <i className="fa fa-window-close"></i>&nbsp;&nbsp;
                Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">

          {/* task starts */}
          {tasks.map(task => <div className="task" key={task.id}>
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">{task.taskTitle}</span>
              </div>
              <div className="task-subtitle">
                <i className="far fa-clock"></i> <span className="task-subtitle-text">{task.taskDateTime}</span>
              </div>
            </div>

            <div className="task-options">
              <button className="icon-button" title="Delete">&times;</button>
            </div>
          </div>)}
          {/* task ends */}

        </div>
      </div>
      <NewTask></NewTask>
    </div>
  )
}

export default Tasks;
