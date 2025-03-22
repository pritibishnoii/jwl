
import React from 'react'
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import jwlFooter from '../public/assets/images/net.svg'
import orangLine from '../public/assets/images/orangLine.svg'
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville( {
    subsets: [ "latin" ],
    weight: [ "400", "700" ],
} );
const Footer = () => {
    return (
        <div className='bg-[#000000D9] w-full h-max '>
            <div className='md:flex w-full md:justify-between'>
                <div className='w-full py-8 px-6 flex flex-col justify-center  gap-4  lg:w-1/4  lg:pl-20 '>
                    <h1 className='text-md text-white md:text-xl'>NEWSLETTER</h1>
                    <p className='text-sm text-white'>Sign up for our newsletter and get the latest
                        updates, news and product offers via email.</p>
                    <label className='w-full h-max py-2 px-4 flex justify-between items-center border-2 border-[#BB853A] rounded-lg '>
                        <input type="email" placeholder='Email'
                            className='text-white placeholder:text-white text-sm outline-none  placeholder:text-lg'
                        />
                        <IoIosArrowDroprightCircle className='text-white text-3xl' />
                    </label>
                </div>

                {/* buttons */ }
                <div className='w-full  h-max  flex flex-col gap-8  justify-center items-center px-6 py-2 md:w-1/2  md:h-88 '>
                    <div className='flex w-full justify-between  md:w-2/3  md:justify-center md:gap-6 '>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>About</button>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>Blog</button>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>Contact</button>
                    </div>
                    <div className='flex w-full justify-between  md:w-2/3 md:justify-center md:gap-6'>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>About</button>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>Blog</button>
                        <button className='bg-[#BB853A] text-white text-sm cursor-pointer rounded-lg py-3 px-6 h-max w-max  md:px-8 md:text-md'>Contact</button>
                    </div>

                </div>
            </div>
            <div className='w-full  h-8  py-8'>
                <hr className='text-white' />
            </div>

            <div className='w-full h-max flex flex-col relative overflow-hidden '>
                <div className='w-3/4 flex px-8  '>
                    <h1 className={ `relative text-white font-bold 
                        text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] px-38 ${ libreBaskerville.className }` }>
                        JWL
                    </h1>
                </div>
                <div className='w-full h-full flex justify-center absolute top-75 left-2/3 -translate-x-1/2'>
                    <Image
                        src={ orangLine }
                        width={ 400 }
                        height={ 400 }
                        alt="img"
                        className='md:w-120 absolute'
                    />
                    <Image
                        src={ jwlFooter }
                        width={ 20 }
                        height={ 20 }
                        alt="footerlogo"
                        className='md:w-68 md:h-max absolute'
                    />
                </div>
            </div>






            <div className='w-full py-12 '>
                <hr className='text-white' />
            </div>
            <div className='w-full  flex '>
                <span className='text-white text-sm  w-1/2  md:flex md:justify-center md:text-lg md:py-3'>© JWLnet | 2025 | All rights reserved</span>
                <span className='w-[1px] h-8 bg-white'></span>
                {/* social icons  */ }
                <div className='md:w-1/2 md:flex  hidden gap-2 h-max justify-center py-2
                '>
                    <span className='w-8 h-8 rounded-full border border-white  flex items-center justify-center'>
                        <FaTwitter className='text-white' />
                    </span>
                    <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'>
                        <FaInstagram className='text-white' />
                    </span>
                    <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'>
                        <IoLogoYoutube className='text-white' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer