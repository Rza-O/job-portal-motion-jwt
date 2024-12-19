import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "motion/react"

/**className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  } */

const Navbar = () => {
    const links = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/addJobs'>Jobs</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/addJobs'>Company</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/addJobs'>Candidates</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/addJobs'>Pages</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-secondary hover:text-white" : ""} to='/addJobs'>Blog</NavLink></li>

    </>
    return (
        <div className="navbar bg-primary text-white font-semibold px-56">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">JobZen</a>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-end gap-6">
                <div className='flex gap-3'>
                    <p className='hover:text-secondary'>Post Job</p>
                    <p>|</p>
                    <p className='hover:text-secondary'>Login</p>
                </div>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn rounded-full text-base bg-secondary text-black border-secondary hover:bg-transparent hover:text-secondary">Hire Top Company</motion.a>
            </div>
        </div>
    );
};

export default Navbar;