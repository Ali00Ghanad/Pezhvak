import React from 'react'
import HomePageHeader from '../Feature/Home/HomePageHeader'
import TeacherArtistGuide from '../Feature/Home/TeacherArtistGuide'
import TrendingOnExplore from '../Components/TrendingOnExplore'
import ActivityTopMemberPremium from '../Feature/Home/ActivityTopMemberPremium'
import LessonsCarousel from '../Feature/Lessons/LessonsCarousel'
import AskToJoinCard from '../Components/AskToJoinCard'
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
            link: '/explore'
          },
          {
            pic: songLogo,
            title: 'Artists',
            paragraph: 'Find and follow amazing artists',
            link: '/aboutus'
          },
          {
            pic: songLogo,
            title: 'Genres',
            paragraph: 'Browse by your favorite genres',
            link: '/genres'
          },
          {
            pic: songLogo,
            title: 'Playlists',
            paragraph: 'Curated playlists for every mood',
            link: '/userProfile#playlists'
          },
        ]}
      />
      <TrendingOnExplore />
      <ActivityTopMemberPremium />
      <LessonsCarousel />
      <AskToJoinCard
        button={'Sign Up Now'}
        paragraph={'Join Pezhvak today and be part of a community that values real music.'}
        title={'Ready to share your sound?'}
      />

    </main>
  )
}

export default HomePage
