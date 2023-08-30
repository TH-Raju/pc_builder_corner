import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li><a>Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Category</summary>
                <ul className="p-2">
                    <li><a>CPU / Processor</a></li>
                    <li><a>Motherboard</a></li>
                    <li><a>RAM</a></li>
                    <li><a>Power Supply Unit</a></li>
                    <li><a>Storage Device</a></li>
                    <li><a>Monitor</a></li>
                </ul>
            </details>
        </li>
        <li><a>Log in</a></li>
        <li><a>Sign in</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link href="/"><button className="btn btn-ghost normal-case text-xl">PC Builder Corner</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href='/pcBuilder'><button className="btn btn-primary">PC Builder</button></Link>
            </div>
        </div>
    );
};

export default Navbar;