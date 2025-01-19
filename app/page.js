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

  const [bgClass, setBgClass] = useState(styles.bg1);

  const changeBackground = (newBgClass) => {
    setBgClass(newBgClass);
  };

  return (
    <div className={`${styles.page} ${bgClass}`}>
      <div className={styles.sidebar}>
        <h2>Subjects</h2>
        <SidebarInput newSubject={newSubject} setNewSubject={setNewSubject} addSubject={addSubject}/>
        <Sidebar subjects={subjects} removeSubject={removeSubject}/>
        <h2>Change Background</h2>
        <div>
          <button className="backgroundButtons" onClick={() => changeBackground(styles.bg1)}>
            <img src="/background.jpeg" style={{height:'40px', width: '60px'}}/>
          </button>
          <button className="backgroundButtons" onClick={() => changeBackground(styles.bg2)}>
            <img src="/background1.jpg" style={{height:'40px', width: '60px'}}/>
          </button>
          <button className="backgroundButtons"  onClick={() => changeBackground(styles.bg3)}>
            <img src="/background2.jpg" style={{height:'40px', width: '60px'}}/>
          </button>
        </div>
      </div>
      <div className={styles.body}>
      <Header/>
      <Textbox/>
      </div>
    </div>
  );
}

export default Home;
