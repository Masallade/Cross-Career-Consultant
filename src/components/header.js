// src/components/Header.js
import React from 'react';
import './header.css'; // Create a CSS file for custom styling

const Header = () => {
  return (
    <header className="header-top">
      <div className="container-fluid bg-danger text-white py-2">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fas fa-envelope"></i> infofnland@gmail.com
              </li>
              <li className="list-inline-item">
                <i className="fas fa-map-marker-alt"></i> 55 Main Street, 2nd block, New York
              </li>
              <li className="list-inline-item">
                <i className="far fa-clock"></i> Mon-Friday, 09am-05pm
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fas fa-phone"></i> Urgent Call: +296 358 700 88
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fab fa-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><i className="fab fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="localhost:3000">Cross Over Consultant</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <a className="dropdown-item" href="#">Service 1</a>
                  <a className="dropdown-item" href="#">Service 2</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
