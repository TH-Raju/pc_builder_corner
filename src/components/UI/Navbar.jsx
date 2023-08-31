
import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from 'next-auth/react'


const Navbar = ({ products }) => {
    const { data: session } = useSession();
    // console.log("from nav", session);
    const menuItems = <>
        <li><a>Home</a></li>
        <li tabIndex={0}>
            <details>
                <summary>Categorys</summary>
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
        {
            session?.user ?
                <button onClick={() => signOut()} className='btn btn-warning btn-sm mt-2'>Log out</button> :
                <Link href='/login'><li>Log in</li></Link>
        }
    </>
    return (
        <div className="navbar bg-gray-500 text-black bg-opacity-10 fixed z-20 top-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link href="/"><button className="btn btn-ghost normal-case text-xl">PC Builder Corner</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
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
