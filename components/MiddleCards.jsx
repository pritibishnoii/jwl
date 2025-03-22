"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import hLine from '../public/assets/images/hLine.svg'
import chartImg from '../public/assets/images/chart.png'
import coinsImg from '../public/assets/images/coins.png'
import paintImg from '../public/assets/images/paint.png'
import robotImg from '../public/assets/images/robot.svg'
import coin from '../public/assets/images/coin.svg'
import howit from '../public/assets/images/hif.svg'
import star from '../public/assets/images/star.svg'
import wtecom from '../public/assets/images/ecommerc.svg'
import orangeBg from '../public/assets/images/orangLine.svg'
import howItFun from '../public/assets/images/howItFun.svg'
import yBG from '../public/assets/images/yBg.svg'

const MiddleCards = () => {

    const [ activeCard, setActiveCard ] = useState( 0 )

    const metaData = [
        {
            id: '01',
            headingtext: 'Expanded Customer Reach',
            paraText: 'Reach a global audience and tap into tech-savvy shoppers who love online convenience!',
            imgUrl: chartImg,
        },
        {
            id: '02',
            headingtext: 'Increased Sales and Revenue',
            paraText: 'Boost sales 24/7 with smart upselling and cross-selling—maximize every opportunity! ',
            imgUrl: coinsImg,
        },
        {
            id: '03',
            headingtext: 'Cost-Effective Marketing',
            paraText: 'Dominate the digital space with SEO & social media!  Track customer behavior for powerful, targeted ads',
            imgUrl: paintImg,
        }
    ]

    return (
        <div className='w-full h-max bg-white'>

            {/* thrive section */ }
            <div className='flex w-full h-max px-4 md:px-8 lg:px-16'>
                {/* first row */ }
                {/* heading */ }
                <div className='w-1/2 flex h-68 justify-center items-center p-1' >
                    <p className='text-[10px] md:text-lg lg:text-base md:w-2/3 md:px-2'>
                        E-commerce offers global reach and 24/7 accessibility, boosting sales while cutting operational costs. It’s the future of business, driving growth and convenience.
                    </p>
                </div>

                {/* second row */ }
                <div className='w-1 h-max py-4'>
                    <Image
                        src={ hLine }
                        width={ 1 }
                        height={ 0 }
                        alt="line"
                        className='h-58'
                    />
                </div>

                {/* third row */ }
                <div className='w-1/2 flex flex-col items-center justify-center h-68 '>
                    <div className='w-full h-max flex justify-center relative  '>
                        <Image
                            src={ star }
                            width={ 0 }
                            height={ 0 }
                            alt="why thrive"
                            className='w-12  h-max absolute top-10 left-68'
                        />
                    </div>
                    <div className='w-full h-full  flex justify-center relative '>

                        <Image
                            src={ wtecom }
                            width={ 50 }
                            height={ 50 }
                            alt="why thrive"
                            className='w-48 md:w-48 lg:w-80 z-10 '
                        />
                        <Image
                            src={ orangeBg }
                            width={ 50 }
                            height={ 50 }
                            alt="why thrive"
                            className='w-98  lg:w-80 absolute  top-25 left-38 '
                        />
                    </div>

                </div>
            </div>

            {/* Cards section */ }
            <div className='w-full h-max flex flex-col px-4 md:px-8 lg:px-16'>
                { metaData.map( ( items, index ) => {
                    return (
                        <div
                            className={ `flex justify-between  gap-2 h-max  transition-transform duration-300 ease-in-out cursor-pointer  ${ activeCard === index ? 'bg-[#BB853A]' : 'bg-white border-b border-[#ABABAB] ' }` }
                            key={ items.id }
                            onClick={ () => setActiveCard( index ) }
                        >
                            <h3 className='font-semibold text-lg md:text-base lg:text-3xl italic  md:w-28 md:pl-8'>{ items.id }</h3>
                            <div className='flex h-max gap-4 items-center py-2   md:justify-around md:flex-1 md:pt-8'>
                                <h1 className='text-[18px] font-semibold md:text-xl lg:text-2xl md:w-48'>{ items.headingtext }</h1>
                                <p className='text-sm md:text-base lg:text-lg md:w-68'>{ items.paraText }</p>
                            </div>
                            <Image
                                src={ items.imgUrl }
                                width={ 100 }
                                height={ 100 }
                                alt="box"
                                className='w-16 md:w-20 lg:w-48'
                            />
                        </div>
                    )
                } ) }
            </div>

            {/* image robot */ }
            <div className='flex w-full h-max py-2 items-center px-4 md:px-8 lg:px-16 '>
                <div className='w-1/2 h-max  flex flex-col justify-center relative  items-center'>

                    <div className='relative flex flex-col'>
                        <div className='w-full px-12'>
                            <Image
                                src={ star }
                                width={ 2 }
                                height={ 2 }
                                alt="img"
                                className=' md:w-12 lg:w-16 '
                            />
                        </div>
                        <Image
                            src={ howItFun }
                            width={ 200 }
                            height={ 200 }
                            alt="img"
                            className='w-32 md:w-68 lg:w-98 '
                        />
                        <Image
                            src={ orangeBg }
                            width={ 200 }
                            height={ 200 }
                            alt="img"
                            className='w-32 md:w-68 lg:w-98 absolute top-35 -left-8'
                        />
                    </div>
                    <div className='w-max h-max '>
                        <Image
                            src={ yBG }
                            width={ 200 }
                            height={ 200 }
                            alt="img"
                            className='w-32 md:w-68 lg:w-98'
                        />
                    </div>
                </div>
                <div className='w-1/2 flex justify-between py-4 items-center'>
                    <div className='w-3/4 h-max '>
                        <Image
                            src={ robotImg }
                            width={ 400 }
                            height={ 400 }
                            alt="robot"
                            className='w-48 md:w-68 lg:w-120'
                        />
                    </div>
                    <div className='w-1/4 relative h-28 md:h-48'>
                        <Image
                            src={ coin }
                            width={ 40 }
                            height={ 40 }
                            alt="coin"
                            className='absolute bottom-3 right-1 w-8 md:w-12 lg:w-48 md:28 md:top-28'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiddleCards