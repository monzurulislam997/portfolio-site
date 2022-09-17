import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { DiMagento } from "react-icons/di";
import { ImHome, ImUserTie } from "react-icons/im";
import './Nvbar .css'
const Navbar = () => {
    return (

        <header class="header text-white " id="header">
            <nav class="nav container">
                <div>
                    <a href="" class="nav__logo">Toufiq Hasan Kiron</a>
                </div>

                <div className='flex justify-center '>
                    <div class="nav__menu  lg:w-1/2 w-3/4 ">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <Link to="#home#about-me" class="nav__link">
                                    <ImHome />
                                </Link>
                            </li>

                            <li class="nav__item">
                                <a href="#skills" class="nav__link">
                                    <DiMagento />
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">
                                    <ImUserTie />
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">
                                    <ImUserTie />
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>

                <i class="bx bx-moon change-theme" id="theme-button"></i>
            </nav>

        </header>




    );
};

export default Navbar;


{/* <div className="navbar text-white p-0" style={{ "backgroundColor": "#0f1729" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className=" normal-case ">

                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>About Me</Link></li>

                    <li className='font-semibold '><Link>Projects</Link></li>
                </ul>
            </div>
            <div className=" navbar-end ">
                <div className='hidden md:block pr-3 first-letter:lg-flex'>
                    <a >Dark Mode</a>
                </div>
            </div>
        </div> */}
