import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
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
      once: false,
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/lessons' element={<Lessons />} />
          <Route path='/trends&explore' element={<TrendPage />} />
        </Route>

      </Routes>
      <Toaster
        position='top-center'
        className="[&_[data-sonner-toast]_svg]:text-blue-txt"
      />
    </BrowserRouter>

  )
}

export default App
