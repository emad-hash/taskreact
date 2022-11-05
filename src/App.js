import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes ,NavLink } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Child from './components/Child';
import Event from './components/Event';
import TASK from './components/TASK';
import Footer from './components/Footer';


function App() {
  return (
   <BrowserRouter>
   <div>
    <nav>
    <ul>
  <li><NavLink activeclassName="active" to="/">Home</NavLink></li>
  <li><NavLink to="/TASK">TASK</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/contact">contact</NavLink></li>
  <li><NavLink to="/child">Child</NavLink></li>
  <li><NavLink to="/event">Event</NavLink></li>


    </ul>
    </nav>
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/child" element={<Child/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/task" element={<TASK/>}/>

    </Routes>
    <Footer/>
   </div>
   </BrowserRouter>
  );
}

export default App;
