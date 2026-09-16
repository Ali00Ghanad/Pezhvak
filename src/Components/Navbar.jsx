import { changeLanguage } from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import languageIcon from '../assets/languageIcon.svg'
import pezhvakLogo from '../assets/PezhvakLogo.svg'

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const isPersian = i18n.language === "fa"
    const [openDD, setOpenDD] = useState(false);
    const [openProfileDD, setOpenProfileDD] = useState(false);
    const dropDownRf = useRef(null);
    const profileDD = useRef(null)
    const location = useNavigate()
    const currentLocation = useLocation()

    useEffect(() => {
        setOpenProfileDD(false)
    }, [currentLocation])

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (dropDownRf.current && !dropDownRf.current.contains(event.target)) {
                setOpenDD(false)
            }

            if (profileDD.current && !profileDD.current.contains(event.target)) {
                setOpenProfileDD(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [openDD, openProfileDD])

    return (
        <div className='flex justify-between text-white z-50'>

            <div onClick={() => location('/home')} className='flex items-center cursor-pointer'>
                <img src={pezhvakLogo} className='w-[90px] max-lg:w-[70px]' />
                <h2 className='font-bold text-[clamp(22px,3vw,34px)]'>{t("nav.pezhvakTitle")}</h2>
            </div>

            <article className='flex items-center justify-between w-[66%]
                max-lg:hidden'>

                <div className='flex gap-x-10 **:hover:text-blue-txt **:duration-400 **:hover:duration-400'>
                    <Link to='/home' >{t("nav.Home")}</Link>
                    <Link to='/explore'>{t("nav.Explore")}</Link>
                    <Link to='/lessons'>{t("nav.Lessons")}</Link>
                    <Link to='/aboutus'>{t("nav.AboutUs")}</Link>
                </div>

                <div className='flex items-center gap-x-2'>

                    <div ref={dropDownRf} className='w-fit relative'>
                        <button
                            onClick={() => setOpenDD(prev => !prev)}
                            className='bg-darkblueLowVolume-bg border border-DarkGreen-br p-2 shrink-0 rounded-full flex
                            gap-2'>
                            <img src={languageIcon} className='w-[25px]' />
                            {
                                isPersian ? <span>فارسی</span> : <span>English</span>
                            }
                        </button>

                        {
                            openDD && (
                                <div
                                    className={`
                                    absolute z-50 
                                    w-[210px]
                                    p-2 rounded-sm
                                    flex flex-col gap-1
                                    border border-DarkGreen-br
                                    drop-shadow-xl
                                    bg-darkest-blue-bg text-black
                                    top-14 ${isPersian ? "left-3 *:text-right" : "right-3 *:text-left"}
                                    *:bg-darkblueLowVolume-bg *:flex *:gap-2 *:border *:border-DarkGreen-br *:text-white *:hover:text-tiffany-txt 
                                    *:px-2 *:py-1 *:rounded-[6px]
                                `}>

                                    <button
                                        onClick={() => {
                                            changeLanguage("fa")
                                            setOpenDD(false)
                                        }}> {t("nav.convertToFa")}
                                    </button>


                                    <button
                                        onClick={() => {
                                            changeLanguage("en")
                                            setOpenDD(false)
                                        }}> {t("nav.convertToEn")}
                                    </button>
                                </div>
                            )
                        }
                    </div>



                    <div ref={profileDD} className='relative'>

                        <button className='cursor-pointer' onClick={() => setOpenProfileDD(prev => !prev)}>
                            <svg className="w-11 h-11 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>

                        {
                            openProfileDD && (
                                <div className={`
                                absolute z-50 
                                w-[210px]
                                p-2 rounded-sm
                                flex flex-col gap-2
                                border border-DarkGreen-br
                                drop-shadow-xl
                                bg-darkest-blue-bg text-black
                                top-14 ${isPersian ? "left-3 *:text-right" : "right-3 *:text-left"}
                                *:bg-darkblueLowVolume-bg *:flex *:gap-2 *:border *:border-DarkGreen-br *:text-white *:hover:text-tiffany-txt 
                                *:px-2 *:py-1 *:rounded-[6px]
                                `}>
                                    <Link to='./userProfile'>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd" />
                                        </svg>
                                        {t("nav.btn.Profile")}
                                    </Link>

                                    <Link to='./uploadLesson'>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5h7.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H4V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                                        </svg>
                                        {t("nav.btn.ShareMusic")}
                                    </Link>

                                    <Link to='/activityData'>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                        </svg>
                                        {t("nav.btn.LastActivity")}
                                    </Link>

                                    <Link to={"/favorites"}>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 15.5V5s3 1 3 4m-7-3H4m9 4H4m4 4H4m13 2.4c0 1.326-1.343 2.4-3 2.4s-3-1.075-3-2.4 1.343-2.4 3-2.4 3 1.075 3 2.4Z" />
                                        </svg>
                                        {t("nav.btn.Favorites")}
                                    </Link>

                                    <Link to='/sign&login'>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clip-rule="evenodd" />
                                        </svg>
                                        {t("nav.btn.SignLogin")}
                                    </Link>
                                </div>
                            )
                        }

                    </div>

                </div>
            </article>

        </div>
    )
}

export default Navbar