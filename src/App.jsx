import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './MainLayout'
import Explore from './Pages/Explore'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import "aos/dist/aos.css";
import AboutUs from './Pages/AboutUs'
import TrendPage from './Pages/TrendPage'
import Lessons from './Pages/Lessons'
import { Toaster } from 'sonner'
import Favorites from './Pages/Favorites'
import UsersProfile from './Pages/MyProfile'
import UploadLesson from './Pages/UploadLesson'
import SignupLogin from './Pages/SignupLogin'
import ActivityData from './Pages/Activity/ActivityData'
import ArtistGuide from './Pages/Artist&Teacher Guide/ArtistGuide'
import TeacherGuide from './Pages/Artist&Teacher Guide/TeacherGuide'
import Genres from './Pages/Genres'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isPersian = i18n.language === "fa";

    document.documentElement.dir = isPersian ? "rtl" : "ltr";
    document.documentElement.lang = isPersian ? "fa" : "en";
  }, [i18n.language]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, [pathname])

    return null
  }

  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/lessons' element={<Lessons />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/uploadLesson' element={<UploadLesson />} />
          <Route path='/activityData' element={<ActivityData />} />
          <Route path='/artistGuide' element={<ArtistGuide />} />
          <Route path='/teacherGuide' element={<TeacherGuide />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/userProfile' element={<UsersProfile />} />
          <Route path='/sign&login' element={<SignupLogin />} />
          <Route path='/trends&explore' element={<TrendPage />} />
        </Route>

      </Routes>
      <Toaster
        position='top-center'
        closeButton
        theme='dark'
        className="[&_[data-sonner-toast]_svg]:text-tiffany-txt"
      />
    </BrowserRouter>

  )
}

export default App
