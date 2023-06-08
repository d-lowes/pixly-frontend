import React from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBarv2.css';

/** Display NavBar with links to Home, and Photos.
 *
*/
function NavBar() {
  return (
    // <nav className="navigation">
    //   <ul className="nav-type">
    //     <li>
    //       <NavLink className="active1" to="/">Pix.ly</NavLink>
    //     </li>
    //     <li>
    //       <NavLink className="active2" to="/photos">Photos</NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="navigation navbar navbar-expand-md">
      <div className="container-fluid">
          <Link className="active" to="/">Pix.ly</Link>
          <NavLink className="active" to="/photos">Photos</NavLink>
          <NavLink className="active" to="/upload">Upload your own!</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;