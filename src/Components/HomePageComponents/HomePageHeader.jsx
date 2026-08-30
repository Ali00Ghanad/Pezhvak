import React from 'react'
import headerBackground from '../../assets/file_000000002a3081f4b273d45edef76f35.png'
import noteIcon from '../../assets/noteMusic.svg'
import connectionIcon from '../../assets/connection-gateway-svgrepo-com.svg'
import earnIcon from '../../assets/ideas-to-earn-money-svgrepo-com.svg'
import { useTranslation } from 'react-i18next'
import ExploreIcon from '../../assets/exploreIcon.svg?react'
import UploadIcon from '../../assets/uploadIcon.svg?react'
import { useNavigate } from 'react-router-dom'

const HomePageHeader = () => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    return (
        <div
            className='relative overflow-hidden w-full px-10 pt-20 pb-10 rounded-[10px] border-2 shadow-lg shadow-black/50 border-DarkGreen-br
                max-lg:p-4
                max-md:aspect-3/2 '
        >

            <img
                src={headerBackground}
                alt=""
                fetchPriority="high"
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-[center_20%]
                "
                loading='eager'
            />

            <div dir='ltr' className='relative z-10 w-full flex flex-col justify-between h-full gap-y-40
                max-md:gap-3'>
                <div>
                    <h1 className='text-[clamp(24px,4vw,34px)] font-bold!'>{t("homeHeader.title")}</h1>
                    <p className='text-muted-text'>{t("homeHeader.description")}</p>
                </div>

                <div className='flex flex-col gap-15
                    max-md:gap-0'>
                    <div className='flex gap-2 text-[clamp(14px,4vw,16px)]
                        max-sm:f'>

                        <button className='bg-tiffany-bg text-darkest-blue-txt rounded-[10px] px-5 py-3 
                        hover:bg-green-bg hover:text-white font-bold flex items-center gap-x-2 group w-fit
                            max-md:p-2'>
                            <UploadIcon className="w-[25px] h-[25px] " />
                            {t("homeHeader.btnUpload")}
                        </button>

                        <button
                            onClick={() => navigate('/explore')}
                            className='group rounded-[10px] px-5 py-3 border-2 border-tiffany-bg text-white 
                             hover:bg-tiffany-bg hover:text-darkest-blue-txt font-bold flex items-center gap-x-2 w-fit
                                max-md:p-2'>

                            <ExploreIcon className='w-[25px] h-[25px] stroke-white group-hover:stroke-darkest-blue-txt duration-[0.4s] group-hover:duration-[0.4s]' />
                            {t("homeHeader.btnExplore")}
                        </button>

                    </div>

                    <div className='w-full flex items-start gap-10
                        max-md:hidden'>

                        <div className='flex items-start gap-2'>
                            <img src={noteIcon} alt='Note Icon' className='w-[35px]' />
                            <div className='flex flex-col justify-between border-l-2 border-neutralGreen-br pl-2'>
                                <h2 className='font-bold'>{t("homeHeader.soloOnly")}</h2>
                                <p className='text-muted-text'>{t("homeHeader.soloOnlyDes")}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-2'>
                            <img src={connectionIcon} alt='Connection Icon' className='w-[35px]' />
                            <div className='flex flex-col justify-between border-l-2 border-neutralGreen-br pl-2'>
                                <h2 className='font-bold'>{t("homeHeader.connect")}</h2>
                                <p className='text-muted-text'>{t("homeHeader.connectDes")}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-2'>
                            <img src={earnIcon} alt='Earn Icon' className='w-[35px]' />
                            <div className='flex flex-col justify-between border-l-2 border-neutralGreen-br pl-2'>
                                <h2 className='font-bold'>{t("homeHeader.earn")}</h2>
                                <p className='text-muted-text'>{t("homeHeader.earnDes")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePageHeader