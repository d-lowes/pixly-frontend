import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

/** Display NavBar with links to Home, and Photos.
 *
*/
function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="html-container">
      <div class="html-section">
        <div class="html-project">
          <div class="navigation">
            <nav className="navigation">
              <ul className="nav-type">
                <li>
                  <NavLink className="active1" to="/">Pix.ly</NavLink>
                </li>
                <li>
                  <NavLink className="active2" to="/photos">Photos</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;;