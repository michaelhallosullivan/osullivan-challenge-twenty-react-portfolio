import React from 'react';

// ABOUT ME, PORTFOLIO, CONTACT, RESUME


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
    <div class="container p-4">
      <div className="nav-item">
        <h1 className="display-5 text-light me-4 text-nowrap">Michael O'Sullivan</h1>
      </div>
    <ul className="navbar-nav w-100 justify-content-around">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'active btn btn-outline-light' : 'btn btn-outline-light'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'active btn btn-outline-light' : 'btn btn-outline-light'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'active btn btn-outline-light' : 'btn btn-outline-light'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'active btn btn-outline-light' : 'btn btn-outline-light'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'active btn btn-outline-light' : 'btn btn-outline-light'}
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
