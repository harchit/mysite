import React, { Component, useRef } from 'react';
import { NavLink } from 'react-router-dom';
export default function Sidebar(props) {

  function onHome(id){

  }

const stylesSections={
    "marginRight":"40px",
    "marginTop":"20px",
    "textDecoration":"none"
}
const styleA={
  textDecoration:"none",
  color:"white",
  marginTop:"20px",
}
  
    return (
    <nav class="sections" style={stylesSections}>
        <NavLink to="/">home</NavLink>
        <br/><br/>
        <NavLink to="/about">about</NavLink>
        <br/><br/>
        <NavLink to="/projects">projects</NavLink>
        <br/><br/>
        <NavLink to="/resume">resume</NavLink>


      </nav>
    )
  }

