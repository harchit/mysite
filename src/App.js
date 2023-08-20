import logo from './logo.svg';
import './App.css';
import Sidebar from './pages/Sidebar';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects'
import Footer from './pages/Footer';



function App() {

  const [page, setPage] = useState('');
  
  return (
    <div className="App"> 

      <div class="container">

      <Sidebar/>

      <div class="routes">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <Footer/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
