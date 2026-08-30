import React from 'react'
import noteIcon from '../../assets/noteMusic.svg'

const MakesUsDiff = () => {

    const differentValues = [
        {
            icon: noteIcon,
            title: 'Community First',
            text: 'We\'re more than a platform. we\'re a community of creators, listeners, and dreamers.'
        },
        {
            icon: noteIcon,
            title: 'Safe & Respectful',
            text: 'We ensure a supportive enviroment where everyone feels safe to be themselves.'
        },
        {
            icon: noteIcon,
            title: 'Learning & Growing',
            text: 'From lessons to feedback, we help you grow your skills and confidence.'
        },
        {
            icon: noteIcon,
            title: 'Global Reach',
            text: 'Music has no boundaries. Neither do we. Connect with people worldwide.'
        },
    ]
    return (
        <div data-aos='fade-up' className='p-10 rounded-[10px] border border-DarkGreen-br bg-darkblueLowVolume-bg'>

            <h2 className='text-tiffany-txt! mb-5 text-[25px]'>What Makes Us Different</h2>

            <div className='grid grid-cols-4 w-full gap-4 
            max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {
                    differentValues.map((item, index) => (
                        <div key={index} className='flex flex-col border border-DarkGreen-br gap-4 justify-between bg-darkest-blue-bg/20 p-4 rounded-[10px]'>
                            <div className='rounded-full p-2 bg-tiffany-bg/30 w-fit'>
                                <img src={item.icon} width={30} />
                            </div>
                            <div>
                                <h3 className='text-[20px] font-semibold'>{item.title}</h3>
                                <p className='text-muted-text' >{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MakesUsDiff
