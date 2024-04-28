import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Navbar(props) {
 
  
 
 
    let navbarBgColor;

    if (props.redmode === 'Red Dark') {
      navbarBgColor = 'bg-success'; 
      
    } else {
      navbarBgColor = `bg-${props.mode}`;
    }
  return (
    <nav className={`navbar navbar-expand-lg ${navbarBgColor}`}>
    <div className="container-fluid">
      <Link className={`navbar-brand text-${props.mode === "light"?"dark":"light"}`}  to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode === "light"?"dark":"light"}`} aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === "light"?"dark":"light"}`} to="/about">{props.about}</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className={`nav-link dropdown-toggle text-${props.mode === "light"?"dark":"light"}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link disabled" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
    
        <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" onClick={props.redtoggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label  text-${props.redmode === "light"?"warning":"light"}`} htmlFor="flexSwitchCheckDefault"  >Enable Red Dark Mode</label>
</div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={() => props.toggleMode(null)}   disabled={props.redmode === 'Red Dark'}  role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault"  >Enable Dark Mode</label>
</div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={() => props.toggleMode('primary')} role="switch" id="flexSwitchCheckDefault"/>
    

   
  <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault"  >Enable Dark Mode</label>
</div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={() => props.toggleMode('danger')}   role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault"  >Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>

  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default Title",
    about: "About Us"
  };
