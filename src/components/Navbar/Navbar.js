import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/consid-logo.png'

export default class Navbar extends Component {

  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="nav-logo" src={logo} alt="Consid Offices" />
            </Link>
            <button type="button"
              className="nav-btn"
              onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/graphs">
                Graphs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
