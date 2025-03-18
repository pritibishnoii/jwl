"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState( false );

    const toggleMenu = () => {
        setActiveMenu( !activeMenu );
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/service", label: "Service" },
        { href: "/blog", label: "Blog" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    return (
        <div className='w-full flex items-center justify-between py-8 relative'>
            {/* Logo */ }
            <div className='w-1/4 flex justify-center'>
                <Image
                    src="/assets/images/jwl_logo.png"
                    width={ 500 }
                    height={ 500 }
                    alt='logo'
                    className=''
                />
            </div>

            {/* Mobile Menu Icon (visible on small screens) */ }
            <div className='md:hidden'>
                <button
                    className='bg-black text-white w-12 h-12 flex justify-center items-center rounded-full cursor-pointer'
                    onClick={ toggleMenu }
                >
                    <LuMenu className='text-2xl' />
                </button>
            </div>

            {/* Desktop Navigation and Contact Button (hidden on small screens, visible on medium and larger screens) */ }
            <div className='hidden md:flex md:w-3/4 items-center justify-between'>
                <nav className='w-1/2 border border-[#C0C0C0] py-4 px-4 rounded-full'>
                    <ul className='flex justify-around w-full text-[#1E1E1E]'>
                        { navLinks.slice( 0, -1 ).map( ( link, index ) => (
                            <li key={ index }>
                                <Link href={ link.href } className='hover:text-gray-600'>
                                    { link.label }
                                </Link>
                            </li>
                        ) ) }
                    </ul>
                </nav>

                <div className='w-1/4 flex justify-center'>
                    <div className='w-3/4 flex py-3 justify-center px-4 bg-black rounded-full text-white gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer'>
                        <button className='text-sm md:text-base lg:text-lg cursor-pointer'>
                            Contact Us
                        </button>
                        <GoArrowUpRight className='text-sm md:text-base lg:text-lg' />
                    </div>
                </div>
            </div>

            {/* Mobile Menu (visible on small screens when activeMenu is true) */ }
            { activeMenu && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={ toggleMenu }>
                    <div
                        className='fixed top-0 right-0 w-48 bg-[#8b6125] h-full p-6 z-50 shadow-lg'
                        onClick={ ( e ) => e.stopPropagation() }
                    >
                        {/* Close Button */ }
                        <button
                            className='bg-white text-black w-9 h-9 flex justify-center items-center rounded-full cursor-pointer absolute top-1 right-1'
                            onClick={ toggleMenu }
                        >
                            <RxCross2 className='text-xl' />
                        </button>

                        {/* Mobile Navigation Links */ }
                        <nav className='w-full flex items-center justify-center h-full'>
                            <ul className='flex flex-col w-full gap-4 text-white'>
                                { navLinks.map( ( link, index ) => (
                                    <li key={ index }>
                                        <Link href={ link.href } className='hover:text-gray-300' onClick={ toggleMenu }>
                                            { link.label }
                                        </Link>
                                    </li>
                                ) ) }
                            </ul>
                        </nav>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Navbar;