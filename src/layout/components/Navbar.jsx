import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import reactLogo from '/assets/react.svg';

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2"> 
      <Link 
          className="navbar-brand" 
          to="/"
      >
        <img src={reactLogo} className="logo-react" alt="React logo" />
      </Link> 

      <div className="navbar-collapse">
        <div className="navbar-nav"> 
          <NavLink 
            className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}` }
            to="/marvel"
          >
            Marvel 
          </NavLink>

          <NavLink 
            className="nav-item nav-link" 
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink 
            className="nav-item nav-link" 
            to="/search"
          >
            Search
          </NavLink> 
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button
            className='nav-item nav-link btn'
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
