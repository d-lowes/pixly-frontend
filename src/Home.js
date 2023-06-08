import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h3>Feelin Hot Hot Hot!</h3>
            <h4>Welcome to Pix.ly</h4>
            <Link to="/upload"><button className="btn btn-primary">New Post</button></Link>
        </div>
    )
}

export default Home;