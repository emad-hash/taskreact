import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes ,NavLink } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Child from './components/Child';
import Event from './components/Event';
// import Tour from './components/Tour';
import Footer from './components/Footer';
import TourList from "./components/TourList";


function App() {
  return (
   <BrowserRouter>
   <div>
    <nav>
    <ul>
  <li><NavLink className="active" to="/">Home</NavLink></li>
  <li><NavLink to="/Tour">Tour</NavLink></li>
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
    <Route path="/Tour" element={<TourList/>}/>
    </Routes>
    <Footer/>
   </div>
   </BrowserRouter>
  );
}

export default App;
