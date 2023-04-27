import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';





function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
