import "./AddForm.css";
import React, { useState, useEffect } from 'react';
import tasksJson from "../../api/tasks";

export default function AddForm({userId,groupId,user,group,tasks,setTasks}) {

  
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  // const [tasks, setTasks] = useState([]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTask.title.trim() === '' || newTask.description.trim() === '') {
      alert("Please fill all input fields")
      return;
    }

    const task = {
      userId,
      title: newTask.title,
      description: newTask.description,
      completed: false,
    };

    const taskData = await tasksJson.post("tasks/add", task);

    const groupTask = {
      groupId,
      taskId: taskData.data._id 
    }

    const result = await tasksJson.post("groups/assign-task", groupTask);
    console.log(result);

     // Update the state with the newly added task from the server response
     setTasks([...tasks, taskData.data]);

    setNewTask({ title: '', description: '' });
    alert('Task added successfully.');
  };


  return (
    <div className="App">
      <h1>Add Your Group Tasks</h1>
      
      {group && user && (
        <div className="user-info">
          <h3>User: {user}</h3>
          <h3>Group: {group}</h3>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

    </div>
  );
}
