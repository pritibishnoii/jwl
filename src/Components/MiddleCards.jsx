import React from 'react'
import Image from 'next/image'
import hLine from '../../public/assets/images/horizontalLine.png'
import whyThrive from '../../public/assets/images/whyThrive.png'

const MiddleCards = () => {
    return (
        <div className='w-full h-max bg-white '>

            <div className='flex w-full h-max bg-red-300'>
                {/* first row  */ }
                {/* heading  */ }
                <div className='w-1/2  flex h-68 justify-center items-center'>
                    <p className='text-sm text-center'>E-commerce offers global reach and 24/7 accessibility, boosting sales while cutting operational costs. It’s the future of business, driving growth and convenience.</p>
                </div>


                {/* second row  */ }
                <div className='w-1 h-68 py-2 '>
                    <Image
                        src={ hLine }
                        width={ 1 }
                        height={ 1 }
                        alt="line"
                    />
                </div>

                {/* third row  */ }
                <div className=' w-1/2 flex  items-center justify-center h-68 '>
                    <Image
                        src={ whyThrive }
                        width={ 500 }
                        height={ 500 }
                        alt="wt"
                    />
                </div>
            </div>
        </div>
    )
}

export default MiddleCards