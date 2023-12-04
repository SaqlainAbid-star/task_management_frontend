import "./TaskList.css";
import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import tasksJson from '../../api/tasks';

export default function TaskList({ groupId,tasks,setTasks }) {


    // const [tasks, setTasks] = useState([]);


    // Fetch the tasks data for the current user's group
    useEffect(() => {
        // const groupId = '64c6577c6371263fc948b7fd';

        tasksJson.get(`groups/tasks/${groupId}`)
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });


    }, []);


    const handleDeleteTask = async(taskId) => {
        try {
            const result = await tasksJson.post("tasks/delete",{taskId,groupId});

             // Remove the deleted task from the state
             setTasks(tasks.filter((task) => task._id !== taskId));

            alert("Task deleted successfully.")
          } catch (error) {
            console.error('Error deleting task:', error);
          }
    };

    const handleTaskStatusChange = async (taskId) => {
        try {
            const response = await tasksJson.put(`tasks/update/${taskId}`);

             // Update the task's completed status in the state
             setTasks((prevTasks) =>
             prevTasks.map((task) =>
                 task._id === taskId ? { ...task, completed: !task.completed } : task
             )
         );

            alert('Task status changed.')
        } catch (error) {
            console.error('Error updating task:', error);
        }

    };

    // Function to handle drag-and-drop reordering
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
    };


    return (
        <div className="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="task-list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
                            {tasks.map((task, index) => (
                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`task-item ${task.completed ? 'completed' : ''}`}
                                        >
                                            <h2>{task.title}</h2>
                                            <p>{task.description}</p>
                                            <div className="task-actions">
                                                <button
                                                    onClick={() => handleTaskStatusChange(task._id)}
                                                    className={task.completed ? 'completed' : ''}
                                                >
                                                    {task.completed ? <AiFillCheckCircle size={30} /> : 'Mark Complete'}
                                                </button>
                                                <button onClick={() => handleDeleteTask(task._id)}>
                                                    <AiFillCloseCircle size={30} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>


        </div>
    );
}
