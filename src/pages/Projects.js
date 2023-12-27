import React from 'react'
import Sidebar from './Sidebar'

export default function Projects() {
  return (
    <div class="projects">
        
        <a href="https://reverb-96eb6668d40c.herokuapp.com/" target="_blank"><b>Reverb</b></a>
        <p>social media site for musicians (MERN stack, MaterialUI)
        <br/>user sign up with friends and content feed</p>
        <a href="https://harchit.github.io/sortingalgo/" target="_blank"><b>sorting visualizer</b></a>
        <p>visualize common sorting algorithms on integer arrays (React)</p>
        <br/>
        <a href="https://laragigs.xyz" target="_blank"><b>laragigs</b></a>
        <p>mock job site with Laravel job postings (PHP, MySql)</p>
        <br/>
        <a href="https://github.com/harchit/PS5_tracker" target="_blank"><b>PS5 tracker</b></a>
        <p>send a text message when the PS5 is in stock on Amazon.
        <br/>uses python's beautiful soup to scrape data</p>
        <a href="/"><b>personal website</b></a>
        <p>the site you're currently viewing (React)<br/> 
        </p>
        
        
    </div>
  )
}
