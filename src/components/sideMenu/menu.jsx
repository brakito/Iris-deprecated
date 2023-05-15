import React from "react";
import Icon from "../icons";
import './main.css'
import MenuItem from "./menuItem";
import logo from '../../resources/logo.svg';

function SideMenu() {
  return <section className="sideMenu">
    <div className="header">
      <img src={logo} alt="iris logo" className="logo"/>
      <button className="toggleMenuBtn">
        <Icon name='open' classes='toggleMenu' />
      </button>
    </div>
    <div className="tools">
      <MenuItem
        icon='love'
        title='Generate'
        description='Create a wonderful palette'
        link='create-palette'
      />
      <MenuItem
        icon='save'
        title='Colection'
        description='Find wonderful palettes'
        link='colection'
      />
    </div>
    <div className="appUtils">
      <MenuItem
        icon='config'
        title='Settings'
        link='colection'
      />
      <MenuItem
        icon='github'
        title='Code here!'
        link='colection'
        url='true'
      />
    </div>
  </section>
}

export default SideMenu