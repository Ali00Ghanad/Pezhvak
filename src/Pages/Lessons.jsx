import React from 'react'
import lessonHeaderHero from '../assets/LessonsHeaderPic.webp'
import LessonsSection from '../Feature/Lessons/LessonsSection'
import songLogo from '../assets/noteMusic.svg'
import ShortCuts from '../Components/ShortCuts'

const Lessons = () => {
  return (
    <div className='flex flex-col gap-6'>

      <div className=''>
        <h1 className='font-bold'>All Packages & Lessons</h1>
      </div>

      <LessonsSection />

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

      <div data-aos='fade-up' className='w-full relative p-8 bg-darkblueLowVolume-bg rounded-[10px]'>

        <img
          src={lessonHeaderHero}
          loading='eager'
          fetchPriority='high'
          className='inset-0 w-full h-full absolute object-cover object-center border border-DarkGreen-br rounded-[10px]'
        />

        <div className='relative h-full z-10 flex flex-col items-start justify-between gap-5'>
          <div>
            <h1 className='font-bold text-[35px]'>All Lessons</h1>
            <p className='text-muted-text'>Discover courses to grow your skills.</p>
          </div>
          <button className='bg-dark-tiffany-bg rounded-[10px] text-white px-6 py-3 hover:bg-tiffany-bg hover:text-darkest-blue-txt'>Teach to Others</button>
        </div>

      </div>

    </div>
  )
}

export default Lessons
