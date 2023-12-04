import React, { useState, useEffect } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import TodoScreen from './screens/todo';
import AddUser from './components/adduser/adduser';
import ShowGroups from './components/showgroups/showgrp';
import { Routes, Route } from "react-router-dom"
import ImageUpload from './components/ImageUpload/ImageUpload';

import './App.css'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/ImageUpload" element={<ImageUpload />} />
      <Route path="/" element={<AddUser />} />
      <Route path="/AddTodo" element={<TodoScreen />} />
      <Route path="/ShowGrp" element={<ShowGroups />} />
    </Routes>
  </div>
  );
}

export default App;

