import React from 'react'//rfce function
import './nav.css';
import { Link } from 'react-router-dom';
function nav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-ll">
          <Link to="/Home" className="active home-a">
          <h1>home</h1>
          </Link>
        </li>
        <li className="home-ll">
        <Link to="/Adduser" className="active home-a">
          <h1>add user</h1>
          </Link>
          
        </li>
        <li className="home-ll">
        <Link to="/Userdetails" className="active home-a">
          <h1>user details</h1>
          </Link>
          
        </li>
      </ul>
    </div>
  )
}

export default nav
