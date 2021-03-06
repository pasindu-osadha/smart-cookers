import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRole } from '../../constants/global';
import { AuthContext } from '../../contexts/AuthContext';

export const Navbar = () => {
    const navigate = useNavigate();

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        // dispatch({ type: 'DeleteUser' });

        window.alert('Sucessfully logout ');
        navigate('/');
        window.location.reload();

    };


    const renderProfile = () => {
        if (user) {
            return (
                <li className='hover:cursor-pointer'>
                    <a onClick={() => navigate('/profile-page')} className="md:p-4 py-2 block hover:text-white">
                        Profile
                    </a>
                </li>
            );
        } else {
            return <span></span>;
        }
    };

    const renderInventory = () => {
        if (user) {
            if (user.Role == UserRole.InventoryStaff) {

                return (
                    <li className='hover:cursor-pointer'>
                        <a onClick={() => navigate('/product-page')} className="md:p-4 py-2 block hover:text-white">
                            Product
                        </a>
                    </li>
                );
            }
        }
        else {
            return <span></span>;
        }
    };


    const renderSales = () => {
        if (user) {
            if (user.Role == UserRole.SalesStaff) {

                return (
                    <li className='hover:cursor-pointer'>
                        <a onClick={() => navigate('/sales-page')} className="md:p-4 py-2 block hover:text-white">
                            Sales
                        </a>
                    </li>
                );
            }
        }
        else {
            return <span></span>;
        }
    };

    const renderTransactionHistory = () => {
        if (user) {
            if (user.Role == UserRole.SalesStaff || user.Role == UserRole.Customer) {
                return (
                    <li className='hover:cursor-pointer'>
                        <a onClick={() => navigate('/profile-TransctionHistory')} className="md:p-4 py-2 block hover:text-white">
                            TransactionHistory
                        </a>
                    </li>
                );
            }
        } else {
            return <span></span>;
        }
    };

    useEffect(() => {

    });


    return (
        <div className="sticky top-0 ">
            <nav className=" flex flex-wrap items-center justify-between w-full h-20 py-4 md:py-0 px-10 text-lg bg-navbarColor text-backgroundColor">
                <div className='hover:cursor-pointer'>
                    <a onClick={() => navigate('/')}>
                        <h1 className="text-5xl">SMARTCookers</h1>
                    </a>
                </div>


                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="text-gray-300 pt-4 md:flex md:justify-between md:pt-0 text-2xl">
                        <li className='hover:cursor-pointer'>
                            <a onClick={() => navigate('/')} className="md:p-4 py-2 block hover:text-white" >
                                Home
                            </a>
                        </li>
                        {/* <li className='hover:cursor-pointer'>
                            <a onClick={() => navigate('/product-page')} className="md:p-4 py-2 block hover:text-white">
                                Product
                            </a>
                        </li> */}

                        {renderInventory()}
                        {renderSales()}
                        {renderProfile()}
                        {renderTransactionHistory()}

                        {/* <li className='hover:cursor-pointer'>
                            <a onClick={() => navigate('/aboutUs')} className="md:p-4 py-2 block hover:text-white">
                                About Us
                            </a>
                        </li> */}
                        <li className='hover:cursor-pointer '>
                            {!user && (
                                <a onClick={() => navigate('/login')} className="md:p-4 py-2 block hover:text-white text-lime-100 bold">
                                    Login
                                </a>
                            )}
                            {user && (
                                <a onClick={() => handleLogout()} className="md:p-4 py-2 block hover:text-white text-lime-100 bold">
                                    Logout
                                </a>
                            )}

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
