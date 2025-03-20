"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import navLogo from '../../public/assets/images/jwl_logo.svg'

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
            <div className='w-1/4 flex justify-center cursor-pointer mx-2'>
                <Image
                    src={ navLogo }
                    width={ 150 }
                    height={ 150 }
                    alt='logo'
                    className=''
                />
            </div>

            {/* Mobile Menu Icon (visible on small screens) */ }
            <div className='md:hidden  px-2'>
                <button
                    className='bg-black text-white w-12 h-12 flex justify-center items-center rounded-full cursor-pointer'
                    onClick={ toggleMenu }
                >
                    { activeMenu ? <RxCross2 className='text-xl' /> : <LuMenu className='text-2xl' /> }
                </button>
            </div>

            {/* Desktop Navigation and Contact Button (hidden on small screens, visible on medium and larger screens) */ }
            <div className='hidden md:flex md:w-1/2 items-center justify-between'>
                <nav className='w-full border-2 border-[#C0C0C0] py-4 px-4 rounded-full flex justify-center'>
                    <ul className='flex justify-around w-3/4  text-[#1E1E1E]'>
                        { navLinks.slice( 0, -1 ).map( ( link, index ) => (
                            <li key={ index }>
                                <Link href={ link.href } className='hover:text-[#8b6125]'>
                                    { link.label }
                                </Link>
                            </li>
                        ) ) }
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu (visible on small screens when activeMenu is true) */ }
            { activeMenu && (
                <div className=''>
                    <div
                        className='fixed top-0 right-0 w-48 bg-[#8b6125] h-98 p-6 z-50 shadow-lg'
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


            <div className='hidden w-1/4 md:flex justify-center'>
                <div className='w-48 flex py-4 justify-center px-4 bg-black rounded-full text-white gap-2 items-center hover:bg-[#BB853A] transition-all duration-300 cursor-pointer'>
                    <button className='text-sm md:text-base lg:text-lg cursor-pointer'>
                        Contact Us
                    </button>
                    <GoArrowUpRight className='text-sm md:text-base lg:text-lg' />
                </div>
            </div>


        </div>
    );
};

export default Navbar;