import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div
            className="bg-[url('/assets/images/boximg.svg')] bg-cover bg-center h-screen"
        >
            <div className=''>
                <Navbar />
            </div>
            {/* You can add more content inside the Hero component here */ }
        </div>
    );
};

export default Hero;