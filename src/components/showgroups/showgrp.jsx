import React, { useEffect, useState } from 'react';
import './showgrp.css';
import tasksJson from '../../api/tasks';

const ShowGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await tasksJson.get('/groups');
        setGroups(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="container">
    <h1>All Group Names</h1>
    {groups.length === 0 ? (
      <p>No groups found.</p>
    ) : (
      groups.map((group) => (
        <div key={group._id} className="group-container">
          <h1 className="group-name">{group.name}</h1>
          <h3 className="group-name">Members:</h3>
          <ul className="member-list">
            {group.members.map((member) => (
              <li key={member._id} className="member-item">
                {member.userName}
              </li>
            ))}
          </ul>
        </div>
      ))
    )}
  </div>
  );
};

export default ShowGroups;
