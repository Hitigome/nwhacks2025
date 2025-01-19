"use client";

import styles from "./page.module.css";
import Header from "/components/header.jsx";
import Textbox from "/components/textbox.jsx";
import SidebarInput from "/components/sidebarInput.jsx";
import Sidebar from "/components/sidebar.jsx";

import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const[subjects, setSubjects] = useState([
    {id: uuidv4(), name: "Math"},
    {id: uuidv4(), name: "English"}, 
    {id: uuidv4(), name: "History"},
  ]);
  const [newSubject, setNewSubject] = useState("");
  
  const addSubject = () => {
    setSubjects([...subjects, {id: uuidv4(), name: newSubject}])
    setNewSubject("");
  }

  const removeSubject = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  }

  return (
    <div className={styles.page}>
      <Header/>
      <Textbox/>

      <h2>Sidebar</h2>
      <SidebarInput newSubject={newSubject} setNewSubject={setNewSubject} addSubject={addSubject}/>
      <Sidebar subjects={subjects} removeSubject={removeSubject}/>

    </div>
  );
}

export default Home;
