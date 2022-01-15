import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
  return (
    <nav>
      <Link to="/About">About</Link> &nbsp;&nbsp;
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}