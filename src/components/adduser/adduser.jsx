import React, { useState } from 'react';
import './adduser.css'; // Import the CSS file for styling
import tasksJson from "../../api/tasks";
import { useNavigate } from 'react-router-dom';


const AddUser = () => {

    const [userName, setUserName] = useState('');
    const [groupName, setGroupName] = useState('');
    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };

    const handleGroupNameChange = (e) => {
        e.preventDefault();
        setGroupName(e.target.value);
    };

    const addUser = async () => {

        const result = await tasksJson.post("users/add", { userName });
        // console.log(result);
        return result.data._id

    }


    const CreateOrJoin = async (userId) => {

        const result = await tasksJson.post("groups/join", { userId, groupName });
        alert(result.data.message);
        return result.data.groupId

    };

    const handleCreateOrJoin = async () => {


        if (userName.trim() === '' || groupName.trim() === '') {
            alert("Please fill all input fields")
            return;
        }

        const userId = await addUser()
        const groupId = await CreateOrJoin(userId)
        const userProps = { userId, groupId, userName, groupName };
        navigate('/AddTodo', { state: userProps })

    };

    const handleShowGroups = () => {
        navigate('/ShowGrp');
    };

    return (
        <div className="fullscreen-form">
            <div className="form-container">
                <h1>Welcome to Our Task Mangement System!</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter User Name"
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter Group Name"
                        value={groupName}
                        onChange={handleGroupNameChange}
                    />
                </div>
                <div className="button-container">
                    <button onClick={handleCreateOrJoin}>Create or Join Group</button>
                    <button onClick={handleShowGroups}>Show All Groups</button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
