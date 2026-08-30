import React from 'react'
import HomePageHeader from '../Components/HomePageComponents/HomePageHeader'
import TeacherArtistGuide from '../Components/HomePageComponents/TeacherArtistGuide'
import TrendingOnExplore from '../Components/TrendingOnExplore'
import ActivityTopMemberPremium from '../Components/HomePageComponents/ActivityTopMemberPremium'
import LessonsCarousel from '../Components/LessonsComponents/LessonsCarousel'
import AtjCard from '../Components/AtjCard'
import ShortCuts from '../Components/ShortCuts'
import songLogo from '../assets/noteMusic.svg'

const HomePage = () => {

  return (
    <main className='w-full flex flex-col gap-6'>

      <HomePageHeader />
      <TeacherArtistGuide />
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
      <ActivityTopMemberPremium />
      <LessonsCarousel />
      <AtjCard
        button={'Sign Up Now'}
        paragraph={'Join Pezhvak today and be part of a community that values real music.'}
        title={'Ready to share your sound?'}
      />
    </main>
  )
}

export default HomePage
