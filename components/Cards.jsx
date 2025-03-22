
import React from 'react'
import Image from 'next/image'


const Cards = () => {

    const metaData = [
        { id: 1, title: "Building Trust", img: '/assets/images/cards/img1.png', description: "Positive reviews and testimonials boost credibility." },
        { id: 1, title: "Building Trust", img: '/assets/images/cards/img1.png', description: "Positive reviews and testimonials boost credibility." },
        { id: 2, title: "Direct Customer Interaction", img: '/assets/images/cards/img2.png', description: "Engage with potential buyers through social media, answering queries and sharing updates." },
        { id: 3, title: "Increased Reach ", img: '/assets/images/cards/img3.png', description: "Attract customers beyond the local market and tap into a global audience." },
        { id: 4, title: "Cost-Effective Marketing", img: '/assets/images/cards/img4.png', description: "Use SEO, paid ads, and influencer collaborations to drive traffic without heavy advertising costs" },
        { id: 5, title: "24/7 Showcase", img: '/assets/images/cards/img5.png', description: "Display your jewelry collections and offers around the clock." },
        { id: 6, title: "Data Insights", img: '/assets/images/cards/img6.png', description: "Track customer behavior and preferences to tailor marketing strategies" },
    ]
    return (
        <>
            <div className='w-full flex gap-4 lg:px-[250px] px-5 mx-auto'>


                <div className=' gap-4 w-[50%] flex flex-col'>

                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[320px]'>
                        <h1 className='text-md font-semibold '>{metaData[0].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[0].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[0].description}</p>
                    </div>

                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[500px]'>
                        <h1 className='text-md font-semibold '>{metaData[2].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[2].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[2].description}</p>
                    </div>
                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[580px]'>
                        <h1 className='text-md font-semibold '>{metaData[4].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[4].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[4].description}</p>
                    </div>
                </div>


                <div className='w-[50%] gap-4 flex flex-col '>
                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[650px]'>
                        <h1 className='text-md font-semibold '>{metaData[1].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[1].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[1].description}</p>
                    </div>
                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[375px]'>
                        <h1 className='text-md font-semibold '>{metaData[3].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[3].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[3].description}</p>
                    </div>
                    <div className='bg-[#BB853A99] rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-4 min-h-[375px]'>
                        <h1 className='text-md font-semibold '>{metaData[5].title}</h1>
                        <div className=''>
                            <Image
                                src={metaData[5].img}
                                width={100}
                                height={100}
                                alt='card1'
                            />
                        </div>
                        <p className='text-sm text-center text-gray-800'>{metaData[5].description}</p>
                    </div>

                </div>
            </div>


            <div className='flex w-full h-max py-12  items-center justify-center  md:justify-between  md:mx-auto'>
                <h1 className='text-sm font-semibold  w-3/4 text-center md:w-1/2 md:text-xl md:text-left' >"Gift Your Jewelry Business the Power of Online Success – Reach More Customers, Boost Sales, and Shine Brighter in the Digital World!"</h1>
                <div className='w-1/3  md:px-6'>
                    <Image
                        src={'/assets/images/gift.png'}
                        width={200}
                        height={200}
                        alt='gift-img'
                    />
                </div>
            </div>


        </>
    )
}

export default Cards