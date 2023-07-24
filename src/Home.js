import React from "react";
import { Link } from "react-router-dom";
import './NavBarv2.css';
import './Home.css';

/** Loads Home page
 *
 * App -> Home
 */

function Home() {
    return (
        <div>
            <h1 className="home-title">Welcome to Pix.ly!</h1>
            <div>
                <Link className="btn-home" to="/upload">Try it out!</Link>
            </div>
        </div>
    );
}

export default Home;