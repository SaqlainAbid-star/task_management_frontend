
import AddForm from "../components/addform/AddForm";
import TaskList from "../components/tasklist/TaskList";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export default function TodoScreen() {

  const location = useLocation();
  const userProps = location.state;
  const [tasks, setTasks] = useState([]);


  return (
    <div className="App">
        <AddForm userId={userProps.userId} groupId={userProps.groupId} 
        user={userProps.userName} group={userProps.groupName} tasks={tasks} setTasks={setTasks}  />
        <TaskList groupId={userProps.groupId} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
