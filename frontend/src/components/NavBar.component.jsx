import { Link, NavLink } from "react-router-dom";
import React from 'react';
import './styles.scss';


export default function NavBar() {
  return (
    <>
      <div className="bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container flex justify-between items-center">
            <div>
              <Link to='/' activeclassname="active">
                              <img src={process.env.PUBLIC_URL + '/inMatePlus.png'}
                className="mx-auto px-10  w-60 h-20 rounded object-left"
                                  alt="InMate+" />
              </Link>
            </div>

            <div className="space-x-6">
              <NavLink to='/home' activeclassname="active" className="text-white">Home</NavLink>
              <NavLink to='/about' activeclassname="active" className="text-white">About</NavLink>
              <NavLink to='/services' activeclassname="active" className="text-white">Services</NavLink>
              <NavLink to='/contact' activeclassname="active" className="text-white">Contact</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
