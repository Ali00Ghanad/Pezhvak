import React from 'react'
import AtjCard from '../Components/AtjCard'
import TrendingOnExplore from '../Components/TrendingOnExplore'
import { Link, useLocation } from 'react-router-dom'
import ShortCuts from '../Components/ShortCuts'
import songLogo from '../assets/noteMusic.svg'
import userLogo from '../assets/followIcon.svg'
import AllMusicsPanel from '../Components/ExploreComponents/AllMusicsPanel'

const Explore = () => {
  const location = useLocation()
  
  return (
    <div className='w-full flex flex-col gap-6'>

      <div className='w-full rounded-[10px] p-10 border border-DarkGreen-br flex 
        bg-linear-90 from-darkblueLowVolume-bg to-tiffany-bg/60 gap-5 justify-between items-end
        max-lg:flex-col max-lg:items-start'>

        <div className='flex flex-col gap-5'>
          <h1 className='text-[45px] leading-10 '>
            <span className='text-blue-txt font-bold'>Explore </span>the Sound<br /> of Creativity
          </h1>
          <p className='text-muted-text'>Discover music, connect with artists,<br /> and find isnpiration</p>
        </div>

        <div className='
          flex gap-1 text-white  **:bg-black/40 **:p-4 **:rounded-lg **:hover:bg-darkest-blue-bg **:duration-400 **:hover:duration-400 **:hover:text-blue-txt
          max-lg:flex-wrap'>
          <Link>Acoustic</Link>
          <Link>Pop</Link>
          <Link>Rock</Link>
          <Link>Indie</Link>
          <Link>More</Link>
        </div>

      </div>

      <ShortCuts
        shortcuts={[
          {
            pic: songLogo,
            title: 'Songs',
            paragraph: 'Discover tracks from artists',
          },
          {
            pic: songLogo,
            title: 'Artists',
            paragraph: 'Find and follow amazing artists',
          },
          {
            pic: songLogo,
            title: 'Genres',
            paragraph: 'Browse by your favorite genres',
          },
          {
            pic: songLogo,
            title: 'Playlists',
            paragraph: 'Curated playlists for every mood',
          },
        ]}
      />

      <TrendingOnExplore />

      <AllMusicsPanel />

      <AtjCard
        title={'Find Your People'}
        paragraph={'Connect with artists who share your passion for music.'}
        button={'Connect Now'}
      />

    </div>
  )
}

export default Explore
