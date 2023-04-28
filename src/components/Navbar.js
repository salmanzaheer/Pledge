import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [move, setMove] = useState(false);

  function handleMove() {
    setMove((move) => !move);
  }

  let togglePanel = move ? " open" : "";

  return (
    <div>
      <header>
        <nav class="navbar">
          <Link to="/" class="logo">
            Pledge
          </Link>

          <ul class={`navlist${togglePanel}`}>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Causes we support</Link>
            </li>
            <li>
              <Link to="/login" class="get-started">
                Make a Pledge
              </Link>
            </li>
          </ul>

          <div class="bx bx-menu" id="menu-icon" onClick={handleMove}></div>
        </nav>
      </header>

      <footer>
        <div class="footlist">
          <Link to="/" class="logo-footer">
            <p class="make-a">Make a</p>Pledge
          </Link>

          <ul class="navlist-foot">
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
