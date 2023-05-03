import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/auth";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import {Transactions} from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
