import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand my-4" >
            NewsMonkey
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
              <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
              <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
              <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
              <Link className="nav-link active" aria-current="page" to="/Science">Science</Link>
              <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
              <Link className="nav-link active" aria-current="page" to="/Technology">Technology </Link>  
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
