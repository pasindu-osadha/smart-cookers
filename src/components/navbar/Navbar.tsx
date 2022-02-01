import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 ">
            <nav className=" flex flex-wrap items-center justify-between w-full h-20 py-4 md:py-0 px-10 text-lg text-white bg-gray-500">
                <div>
                    <a>
                        <h1 className="text-4xl">SMARTCookers</h1>
                    </a>
                </div>


                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="text-gray-300 pt-4 md:flex md:justify-between md:pt-0 text-xl">
                        <li>
                            <a onClick={() => navigate('/')} className="md:p-4 py-2 block hover:text-white" >
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/product-page')} className="md:p-4 py-2 block hover:text-white">
                                Product
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/store')} className="md:p-4 py-2 block hover:text-white">
                                Store
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/aboutUs')} className="md:p-4 py-2 block hover:text-white">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/login')} className="md:p-4 py-2 block hover:text-white text-yellow-300" href="#">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
