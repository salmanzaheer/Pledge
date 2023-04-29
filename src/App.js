import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Foot from './components/Foot';
import { Auth } from './components/Auth';






function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Hero />
      <Foot />

      <Routes>
        <Route path='/login' element={<Auth />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
