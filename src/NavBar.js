import React from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';

/** Display NavBar with links to Home, and Photos.
 *
*/
function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <nav>
    //   <div class="html-container">
    //     <div class="html-section">
    //       <div class="html-project">
    //         <div class="navigation">
    //           <nav className="navigation">
    //             <ul className="nav-type">
    //               <li>
    //                 <NavLink className="active1" to="/">Pix.ly</NavLink>
    //               </li>
    //               <li>
    //                 <NavLink className="active2" to="/photos">Photos</NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
          <Link className="active1" to="/">Pix.ly</Link>
          <NavLink className="active2" to="/photos">Photos</NavLink>
          <NavLink className="active2" to="/upload">Upload your own!</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;;