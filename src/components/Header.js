import React from 'react';
import '../styles/color.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-1'>
    <div class="container p-4">
      <div className="nav-item">
        <h1 className="display-5 text-light me-4 text-nowrap">Michael O'Sullivan</h1>
      </div>
    <ul className="navbar-nav w-100 justify-content-around">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'active btn btn-danger' : 'btn btn-outline-light'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active btn btn-danger' : 'btn btn-outline-light'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active btn btn-danger' : 'btn btn-outline-light'}
        >
          Resumé
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active btn btn-danger' : 'btn btn-outline-light'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Header;
