import { Link } from "react-router-dom";
import { useState } from "react";
import '../App.css';

export const Navbar = () => {
  const [move, setMove] = useState(false);

  function handleMove() {
    setMove((move) => !move);
  }

  let togglePanel = move ? " open" : "";

  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">
            Pledge
          </Link>

          <ul className={`navlist${togglePanel}`}>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Causes we support</Link>
            </li>
            <li>
              <Link to="/login" className="get-started">
                Make a Pledge
              </Link>
            </li>
          </ul>

          <div className="bx bx-menu" id="menu-icon" onClick={handleMove}></div>
        </nav>
      </header>

      <footer>
        <div className="footlist">
          <Link to="/" className="logo-footer">
            <p className="make-a">Make a <br></br>Pledge</p>
          </Link>

          <ul className="navlist-foot">
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Legal</Link>
            </li>
            <li>
              <Link to="/">Whats ahead?</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
