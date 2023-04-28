import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Foot from './components/Foot';





function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Foot />
    </div>
  );
}

export default App;
