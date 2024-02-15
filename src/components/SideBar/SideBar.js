import React from 'react'
import { MainMenu } from './MainMenu'
import { Logo } from './Logo'
import { Other } from './Other'
import '../../App.css'
export const SideBar = () => {
  return (
    <div className="sidebar" id="1:165">
        <Logo/>
        <MainMenu/>
        <Other/>
    </div>
  );
}
