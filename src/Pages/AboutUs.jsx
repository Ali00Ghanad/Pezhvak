import React, { useEffect } from 'react'
import aboutHeaderImg from '../assets/aboutHeaderImage.png'
import NoteIcon from '../assets/noteMusic.svg?react'
import ActiveUsers from '../assets/followIcon.svg?react'
import MeetTheTeam from '../Components/AboutUsComponents/MeetTheTeam'
import MakesUsDiff from '../Components/AboutUsComponents/MakesUsDiff'
import OurStory from '../Components/AboutUsComponents/OurStory'

const AboutUs = () => {

    const webInfo = [
        {
            icon: <ActiveUsers className="w-[30px] h-[30px] stroke-tiffany-txt" />,
            title: '250K+',
            text: 'Active Users'
        },
        {
            icon: <NoteIcon className="w-[30px] h-[30px] text-tiffany-txt" />,
            title: '100K+',
            text: 'Songs Shared'
        },
        {
            icon: <NoteIcon className="w-[30px] h-[30px] text-tiffany-txt" />,
            title: '340K+',
            text: 'Views'
        },
    ]

    return (

        <div className='flex flex-col gap-6'>
            <div
                className="
                    relative
                    overflow-hidden
                    w-full
                    min-h-[700px]
                    rounded-[10px]
                    border
                    border-DarkGreen-br
                    bg-darkblueLowVolume-bg
                    flex flex-col justify-between
                    p-10
                    "
            >
                <img
                    src={aboutHeaderImg}
                    alt=""
                    fetchPriority="high"
                    loading="eager"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-center
                    "
                />

                <div className="relative z-10">
                    <p className="text-tiffany-txt">About Pezhvak</p>

                    <h1 className="text-[45px] font-bold">
                        Our Mission <br />
                        <span className="text-tiffany-txt">
                            Your Voice.
                            <br />
                            The World.
                        </span>
                    </h1>

                    <p className="text-muted-text">
                        Pezhvak empowers musicians, educators,
                        <br />
                        and music lovers to create, share, and grow
                        <br />
                        together through the power of music.
                    </p>
                </div>

                <div
                    data-aos='fade-right'
                    className='relative z-10 flex gap-15'
                >
                    {
                        webInfo.map((item, index) => (
                            <div key={index}>
                                {item.icon}
                                <h3 className='text-tiffany-txt! font-bold text-[25px]'>
                                    {item.title}
                                </h3>
                                <p className='text-muted-text'>
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>


            <OurStory />
            <MakesUsDiff />
            <MeetTheTeam />

        </div>
    )
}

export default AboutUs
