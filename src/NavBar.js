import React from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBarv2.css';

/** Display NavBar with links to Home, and Photos.
 *
 * App -> NavBar 
*/
function NavBar() {
  return (
    <nav className="navigation navbar navbar-expand-md">
      <div className="container-fluid">
          <Link className="active" to="/">Michae.ly</Link>
          <NavLink className="active" to="/photos">Photos</NavLink>
          <NavLink className="active" to="/upload">Upload your own!</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;