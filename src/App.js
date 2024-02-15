import React from 'react'
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { NavBar } from './components/NavBar/NavBar';
import { SideBar } from './components/SideBar/SideBar';
function App() {
  return (
    <div className="landing-page" id="1:112">
      <div className="container1">
        <SideBar />
      </div>
      <div className="container2">
        <div className="container3"><NavBar /></div>
        <div className="container4"><Dashboard /></div>
      </div>
    </div>
  );
}

export default App;
