import React from 'react'
import pezhvakTeamImg from '../../assets/file_000000002a3081f4b273d45edef76f35.png'
import { Link } from 'react-router-dom'
import linkedIn from '../../assets/linkedin-svgrepo-com.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter-X.svg'

const MeetTheTeam = () => {
    const pezhvakTeam = [
        {
            name: 'Ali Ghanad',
            title: 'Frontend Developer',
            image: pezhvakTeamImg,
            path: {
                linkedIn: 'https://www.linkedin.com/feed/',
                instagram: 'https://www.instagram.com/',
                twitter: 'https://x.com/AliGhanad575',
            }
        },
        {
            name: 'XXX Person',
            title: 'Backend Developer',
            image: pezhvakTeamImg,
            path: {
                linkedIn: '',
                instagram: '',
                twitter: '',
            }
        },
    ]


    return (
        <div data-aos='fade-up' className='p-10 rounded-[10px] border border-DarkGreen-br bg-darkblueLowVolume-bg'>

            <div>
                <h2 className='text-tiffany-txt! text-[25px]'>Meet the Team</h2>
                <p className='text-[25px] text-white'>The People Behind Pezhvak</p>
            </div>

            <div className='flex w-full gap-4 mt-4 max-md:flex-wrap'>
                {
                    pezhvakTeam.map((item, index) => (
                        <div key={index} className='flex bg-darkest-blue-bg/60 p-6 border border-DarkGreen-br rounded-[10px] items-center gap-6 
                        max-md:w-full'>
                            <div className='rounded-full w-[70px] h-[70px] bg-black shrink-0'>
                                <img src={item.image} className='w-full rounded-full object-scale-down object-cover h-full ' />
                            </div>

                            <div className='max-md:flex max-md:justify-between max-md:w-full max-md:gap-x-4 max-md:flex-wrap'>
                                <div>
                                    <h3 className='text-[20px]'>{item.name}</h3>
                                    <p className='text-muted-text'>{item.title}</p>
                                </div>

                                <div className='flex items-center gap-8 mt-4'>
                                    <Link target='_blank' to={item.path.instagram} className='p-0! hover:bg-transparent! hover:scale-140'><img src={instagram} width={20} /></Link>
                                    <Link target='_blank' to={item.path.twitter} className='p-0! hover:bg-transparent! hover:scale-140'><img src={twitter} width={20} /></Link>
                                    <Link target='_blank' to={item.path.linkedIn} className='p-0! hover:bg-transparent! hover:scale-140'><img src={linkedIn} width={20} /></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MeetTheTeam
