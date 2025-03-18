import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

const Hero = () => {
    return (
        <div
            className="bg-[url('/assets/images/boximg.svg')] bg-cover bg-center h-screen"
        >
            {/* Navbar */ }
            <div className=''>
                <Navbar />
            </div>

            {/* Hero Content */ }
            <div className='flex flex-col relative h-max  justify-center items-center'>
                {/* Sun Logo and Heading */ }
                <div className='w-full h-full  flex flex-col justify-center items-center py-4 sm:py-8'>
                    {/* Sun Logo */ }
                    <div className='w-16 h-16 sm:w-20 sm:h-20'>
                        <Image
                            src="/assets/images/suniso.png"
                            width={ 50 }
                            height={ 50 }
                            alt="coin"
                            className='w-full h-full'
                        />
                    </div>

                    {/* Heading */ }
                    <div className='w-full sm:w-3/4 lg:w-1/2 py-4 sm:py-8 flex items-center justify-center h-max'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>
                            Transforming Tradition, Elevating Business, Embracing Digital Success!
                        </h1>
                    </div>

                    {/* Diamond Image */ }
                    <div className='w-full sm:w-3/4 lg:w-1/2 py-4 flex justify-center'>
                        <Image
                            src="/assets/images/diamond.png"
                            width={ 600 }
                            height={ 600 }
                            alt="diamond-logo"
                            className='w-full h-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]'
                        />
                    </div>


                    {/* Try a Demo Button */ }
                    <div className='w-full flex justify-center sm:mt-8'>
                        <div className='w-48 flex py-3 sm:py-4 justify-center px-4 bg-[#BB853A] rounded-full text-white gap-2 items-center hover:bg-gray-800 transition-all duration-300 cursor-pointer'>
                            <button className='text-sm sm:text-base lg:text-lg cursor-pointer'>
                                Try a Demo
                            </button>
                            <GoArrowUpRight className='text-sm sm:text-base lg:text-lg' />
                        </div>
                    </div>
                </div>


                {/* Coin Image */ }
                <div className='absolute bottom-0 left-2 sm:left-4'>
                    <Image
                        src="/assets/images/coin.png"
                        width={ 150 }
                        height={ 150 }
                        alt="coin"
                        className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;