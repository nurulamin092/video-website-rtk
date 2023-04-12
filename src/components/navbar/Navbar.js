import React from 'react';
import Search from './Search';
import lwsImg from '../../assets/lws.svg'
import searchImg from '../../assets/search.svg'

const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <a href="/">
                    <img
                        className="h-10"
                        src={lwsImg}
                        alt="Learn with Sumit"
                    />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                   <Search/>
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchImg}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;