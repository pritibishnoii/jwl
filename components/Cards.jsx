"use client"
import React from 'react'
import Image from 'next/image'


const Cards = () => {

    const metaData = [
        { id: 1, title: "Building Trust", img: 'assets/images/cards/img1.png', description: "Positive reviews and testimonials boost credibility." },
        { id: 2, title: "Direct Customer Interaction", img: '/assets/images/cards/img2.png', description: "Engage with potential buyers through social media, answering queries and sharing updates." },
        { id: 3, title: "Increased Reach ", img: '/assets/images/cards/img3.png', description: "Attract customers beyond the local market and tap into a global audience." },
        { id: 4, title: "Cost-Effective Marketing", img: '/assets/images/cards/img4.png', description: "Use SEO, paid ads, and influencer collaborations to drive traffic without heavy advertising costs" },
        { id: 5, title: "24/7 Showcase", img: '/assets/images/cards/img5.png', description: "Display your jewelry collections and offers around the clock." },
        { id: 6, title: "Data Insights", img: '/assets/images/cards/img6.png', description: "Track customer behavior and preferences to tailor marketing strategies" },
    ]
    return (
        <div className='w-full h-max flex flex-col gap-4'>
            <div className='w-full full flex flex-col gap-4 items-center'>
                {
                    metaData.map( ( card ) => {
                        return (
                            <div className='bg-[#BB853A99] w-3/4 h-max rounded-2xl py-6 px-4 flex flex-col items-center gap-4'
                                key={ card.id }>
                                <h1 className='text-md font-semibold '>{ card.title }</h1>
                                <div className=''>
                                    <Image
                                        src={ card.img }
                                        width={ 100 }
                                        height={ 100 }
                                        alt='card1'
                                    />
                                </div>
                                <p className='text-sm text-center text-gray-800'>{ card.description }</p>
                            </div>
                        )
                    } )
                }

            </div>



            <div className='flex w-full h-max py-12 px-2  items-center justify-center md:w-3/4   md:justify-between  md:mx-auto'>
                <h1 className='text-sm font-semibold  w-3/4 text-center md:w-1/2 md:text-xl md:text-left' >"Gift Your Jewelry Business the Power of Online Success – Reach More Customers, Boost Sales, and Shine Brighter in the Digital World!"</h1>
                <div className='w-1/3  md:px-6'>
                    <Image
                        src={ '/assets/images/gift.png' }
                        width={ 200 }
                        height={ 200 }
                        alt='gift-img'
                    />
                </div>
            </div>


        </div>
    )
}

export default Cards