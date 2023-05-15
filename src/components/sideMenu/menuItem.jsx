import React from "react";
import './main.css'
import { Link } from "wouter";
import Icon from "../icons/index";

function MenuItem({ icon, title, description, link }) {
  return <Link href={`/${link}`} className='menuItem'>
    <Icon name={icon} classes={`${icon}Icon sideMenuIcon`} />
    <div>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  </Link>
}

export default MenuItem