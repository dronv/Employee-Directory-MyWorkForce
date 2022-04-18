
  import { NavLink} from "react-router-dom";
  import React from 'react';
  import './Navbar.css';

function Navbar() {
  
    return (
      <nav>
        <NavLink to ='/Home' activeClassName="active"> Home </NavLink>
        <NavLink to= "/AddNewEmployee" activeClassName="active">AddNewEmployee </NavLink>
        <NavLink to="/CurrentEmployees" activeClassName="active">CurrentEmployees </NavLink>
        </nav>
    );
  }
  export default Navbar;
  