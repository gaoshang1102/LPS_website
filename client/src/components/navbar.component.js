import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbarcomponent.css';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link /*to="/"*/ className="navbar-brand">Lung Endothelial Cells post LPS injury</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Day0</Link>
          </li>
	  <li className="navbar-item">
          <Link to="/hour6" className="nav-link">Hour6</Link>
          </li>
          <li className="navbar-item">
          <Link to="/day1" className="nav-link">Day1</Link>
          </li>
	  <li className="navbar-item">
          <Link to="/day2" className="nav-link">Day2</Link>
          </li>
          <li className="navbar-item">
          <Link to="/day3" className="nav-link">Day3</Link>
          </li>
          <li className="navbar-item">
          <Link to="/day7" className="nav-link">Day7</Link>
          </li>
        </ul>    
        </div>
        </nav> 
    );
  }
}
