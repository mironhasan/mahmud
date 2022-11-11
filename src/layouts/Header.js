import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const themeGet = localStorage.getItem("themeMahmud");
    const themeElm = document.querySelector("html");
    const [theme, setTheme] = useState(themeGet ? themeGet : "dark");

    if(theme !== "light") themeElm.classList.replace("light", "dark");
    else themeElm.classList.replace("dark", "light");

    const lightTheme = () => {
        setTheme("light");
        localStorage.setItem("themeMahmud", "light");
        themeElm.classList.replace("dark", "light");
    }

    const darkTheme = () => {
        setTheme("dark");
        localStorage.setItem("themeMahmud", "dark");
        themeElm.classList.replace("light", "dark");
    }

    const toggleTheme = () => {
        if(theme !== "light") lightTheme();
        else darkTheme();
    }

    return (
        <header className='py-4 border-b border-solid dark:border-primary/10 backdrop-blur-3xl fixed top-0 left-0 w-full z-50'>
           <div className='max-w-6xl px-5 mx-auto md:flex md:items-center md:justify-between md:gap-5'>
                <div className='md:flex md:items-center md:justify-start md:gap-8'>
                    <Link to="#" className='flex items-center justify-start gap-1 w-fit'>
                        <img src='images/logo.png' alt='logo' className='h-10' />
                        <span className='text-xl dark:font-bold font-extrabold uppercase tracking-wide dark:text-white text-darkness'>mahmud</span>
                    </Link>
                    <div className='md:flex md:items-center md:justify-start md:gap-4 md:border-l md:border-solid md:dark:border-gray-700/70 md:pl-8'>
                        <Link to="//github.com/mironhasan" target="_blank" rel="noopener noreferrer" data-title='github' className='fa-brands fa-github text-lg 
                        w-8 h-8 leading-8 text-center rounded-full dark:bg-slate-700/50 dark:text-gray-300 transition-hover'/>
                        <Link to="//www.facebook.com/mironcoder/" target="_blank" rel="noopener noreferrer" data-title='facebook' className='fa-brands fa-facebook text-lg 
                        w-8 h-8 leading-8 text-center rounded-full dark:bg-slate-700/50 dark:text-gray-300 transition-hover'/>
                        <Link to="//www.linkedin.com/in/mironcoder/" target="_blank" rel="noopener noreferrer" data-title='linkedin' className='fa-brands fa-linkedin text-base 
                        w-8 h-8 leading-8 text-center rounded-full dark:bg-slate-700/50 dark:text-gray-300 transition-hover'/>
                    </div>
                </div>
                <div className="md:flex md:items-center md:justify-end md:gap-5">
                    <nav className="md:flex md:items-center md:justify-end md:gap-3">
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">home</Link>
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">services</Link>
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">resume</Link>
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">portfolio</Link>
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">skills</Link>
                        <Link to="#home" className="uppercase text-xs font-semibold py-2 px-3 tracking-wide rounded-md transition-hover">contact</Link>
                    </nav>
                    <button type='button' onClick={ toggleTheme } className='flex items-center justify-center gap-1 dark:bg-slate-700/50 py-1 px-2 rounded-full'>
                        <i className={`fa-solid ${ theme !== "light" ? "fa-moon" : "fa-sun" } text-xs w-6 h-6 leading-6 text-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl dark:shadow-amber-500/50`}></i>
                        <span className='uppercase text-[11px] font-semibold tracking-wide pr-1'>{ theme }</span>
                    </button>
                </div>
           </div>
        </header>
    )
}
