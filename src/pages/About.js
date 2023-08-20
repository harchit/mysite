import React, { Component } from 'react'
import Sidebar from './Sidebar'
export default class About extends Component {
  render() {
    return (

      <div class="about">
        <img src={require("../images/beach.jpeg")} alt="image" class="photo"/><br/>
        i'm a developer based in brampton ON. i love all things music, tech, science, and history. 
        <br/><br/>my passions include staying fit, playing drums and guitar, playing basketball and anything that gets to 
        work out my brain. <br/><br/>
        my mantra in life is to never complain and to always be learning about the world.
        
        </div>
    )
  }
}
