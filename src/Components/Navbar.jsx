import { changeLanguage } from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import messageIcon from '../assets/messageIcon.svg'
import languageIcon from '../assets/languageIcon.svg'
import pezhvakLogo from '../assets/PezhvakLogo.svg'

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [openDD, setOpenDD] = useState(false);
    const dropDownRf = useRef(null);
    const location = useNavigate()

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (dropDownRf.current && !dropDownRf.current.contains(event.target)) {
                setOpenDD(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [openDD])

    return (
        <div className=' flex items-center justify-between text-white z-50 '>

            <div onClick={() => location('/home')} className='flex items-center cursor-pointer'>
                <img src={pezhvakLogo} className='w-[90px] max-md:w-[70px]' />
                <h2 className='font-bold text-[clamp(22px,3vw,34px)]'>{t("nav.pezhvakTitle")}</h2>
            </div>

            <ul className='flex gap-x-10 **:hover:text-blue-txt **:duration-400 **:hover:duration-400 max-lg:hidden'>
                <Link to='/home' >{t("nav.Home")}</Link>
                <Link to='/explore'>{t("nav.Explore")}</Link>
                <Link to='/lessons'>{t("nav.Lessons")}</Link>
                <Link to='/aboutus'>{t("nav.AboutUs")}</Link>
            </ul>



            <div className='flex items-center gap-x-2 w-fit '>

                <div ref={dropDownRf} className='w-fit relative max-lg:hidden'>
                    <button
                        onClick={() => setOpenDD(!openDD)}
                        className='bg-darkblueLowVolume-bg border border-DarkGreen-br p-2 shrink-0 rounded-full 
                        hover:bg-transparent hover:border-darkest-blue-bg hover:scale-130'>
                        <img src={languageIcon} className='w-[25px]' />
                    </button>

                    {
                        openDD && (
                            <div
                                className={`bg-white rounded-[10px] flex-col items-center justify-between absolute top-13 flex shadow-md z-50`}>

                                <p className='px-5 py-2 rounded-t-[10px] text-darkest-blue-txt cursor-pointer hover:bg-dark-tiffany-bg hover:text-white w-full text-center'
                                    onClick={() => {
                                        changeLanguage("fa")
                                        setOpenDD(false)
                                    }}> {t("nav.convertToFa")} </p>

                                <div className='border-t-2 w-full border-DarkGreen-br'></div>

                                <p className='px-5 py-2 rounded-b-[10px]  text-darkest-blue-txt cursor-pointer hover:bg-dark-tiffany-bg hover:text-white w-full text-center'
                                    onClick={() => {
                                        changeLanguage("en")
                                        setOpenDD(false)
                                    }}> {t("nav.convertToEn")} </p>
                            </div>
                        )
                    }
                </div>

                <input type='search' placeholder={t("nav.inputPh")} className='
                bg-darkblueLowVolume-bg border-2 border-DarkGreen-br rounded-full px-4 py-2 outline-0 placeholder:text-[12px]
                max-lg:hidden'
                />

                <div className='flex items-center gap-x-6'>
                    <div className='rounded-full border-DarkGreen-br cursor-pointer border shrink-0 p-2 bg-darkblueLowVolume-bg duration-[0.4s]
                    hover:bg-transparent hover:border-darkest-blue-bg hover:scale-130 hover:duration-[0.4s]
                    max-lg:hidden'>
                        <img src={messageIcon} className='w-[25px]' />
                    </div>

                    <div>Prof</div>

                </div>
            </div>

        </div>
    )
}

export default Navbar
