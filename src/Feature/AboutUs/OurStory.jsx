import React from 'react'
import aboutImgInfo from '../../assets/aboutUs-info-IMG.jpg'

const OurStory = () => {
    return (
        <div data-aos='fade-up' className='bg-darkblueLowVolume-bg border border-DarkGreen-br rounded-[10px] p-10 flex gap-5 justify-between 
        max-lg:flex-wrap'>

            <div>
                <p className='text-tiffany-txt'>Our Story</p>
                <h2 className='text-[35px] font-bold'>Built by Musicians,<br /><span className='text-tiffany-txt'> for Musicians.</span></h2>
                <p className='text-muted-text mt-5'>Pezhvak started with a simple idea - music connects us all. Whether you're a beginner or a pro, we created a space<br /> where you can express yourself, learn, and build real connections.</p>
            </div>

            <div className='w-full max-w-[450px] max-lg:max-w-full'>
                <img
                    loading='lazy'
                    src={aboutImgInfo} className='w-full h-full rounded-[10px] object-cover' />
            </div>

        </div>
    )
}

export default OurStory
