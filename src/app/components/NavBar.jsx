import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <div className="flex justify-between items-center">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <div
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">

                            <a className="btn btn-primary btn-outline">FAQ</a>
                            <a className="btn btn-primary btn-outline">Learn</a>
                            <a className="btn btn-primary btn-outline">Logout</a>

                        </div>
                    </div>

                    <Link href="/mainpage" class="flex items-center gap-1">
                        <span class="text-xl font-semibold leading-7 text-[#18181B]">English</span>
                        <Image src={logo} alt="" />
                        <span class="bangla-font text-xl">জানালা</span>
                    </Link>
                </div>

                <div className="space-x-2 hidden md:flex">
                    <a className="btn btn-primary btn-outline">FAQ</a>
                    <a className="btn btn-primary btn-outline">Learn</a>
                    <a className="btn btn-primary btn-outline">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;