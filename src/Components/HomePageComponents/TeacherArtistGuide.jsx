import React from 'react'
import teacherHeroIcon from '../../assets/teacherHeroIcon.svg'
import artistHeroIcon from '../../assets/guitarHeroIcon.svg'
import teacherCircleIcon from '../../assets/teacherCircleicon.svg'
import artistCircleIcon from '../../assets/noteMusic.svg'
import tickIcon from '../../assets/tick-circle-svgrepo-com.svg'
import { useTranslation } from 'react-i18next'

const TeacherArtistGuide = () => {

    const { t, i18n } = useTranslation();
    const isPersian = i18n.language === "fa";

    const teacherGuideItems = [
        {
            description: `${t("teacher.options1")}`,
        },
        {
            description: `${t("teacher.options2")}`,
        },
        {
            description: `${t("teacher.options3")}`,
        },
    ]

    const artistGuideItems = [
        {
            description: `${t("artist.options1")}`,
        },
        {
            description: `${t("artist.options2")}`,
        },
        {
            description: `${t("artist.options3")}`,
        },
    ]

    return (
        <div className='w-full flex gap-4 max-md:flex-col'>

            <div className={`w-full rounded-[10px] border border-DarkGreen-br p-6 ${isPersian ? "bg-linear-90" : "bg-linear-290"} from-darkblueLowVolume-bg
             to-dark-tiffany-bg/20  flex flex-col gap-6 items-start relative`}>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-x-2 z-20'>
                        <div className='bg-green-bg/30 p-2 rounded-full shrink-0'>
                            <img src={artistCircleIcon} alt='teacherIcon' className='w-[35px]' />
                        </div>
                        <h2 className='text-[25px]'>{t("artist.title")}</h2>
                    </div>

                    <p className='text-muted-text'>{t("artist.description")}</p>
                </div>

                <div className='text-muted-text flex flex-col gap-y-2 z-20'>
                    {
                        artistGuideItems.map((item, index) => (
                            <div key={index} className='flex items-center gap-x-2'>
                                <img src={tickIcon} className='w-[20px]' />
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>

                <button className='bg-darkest-blue-bg border-DarkGreen-br border px-4 py-2 rounded-[10px] text-white hover:text-blue-txt'>{t("artist.btn")}</button>

            </div>

            <div className={`w-full rounded-[10px] border border-DarkGreen-br p-6 ${isPersian ? "bg-linear-90" : "bg-linear-290"} from-darkblueLowVolume-bg
             to-dark-tiffany-bg/20  flex flex-col gap-6 items-start relative`}>

                <div className='flex flex-col gap-2 z-20'>
                    <div className='flex items-center gap-x-2'>
                        <div className='bg-green-bg/30 p-2 rounded-full shrink-0'>
                            <img src={teacherCircleIcon} alt='teacherIcon' className='w-[35px]' />
                        </div>
                        <h2 className='text-[25px]'>{t("teacher.title")}</h2>
                    </div>

                    <p className='text-muted-text'>{t("teacher.description")}</p>
                </div>

                <div className='text-muted-text flex flex-col gap-y-2 z-20'>
                    {
                        teacherGuideItems.map((item, index) => (
                            <div key={index} className='flex items-center gap-x-2'>
                                <img src={tickIcon} className='w-[20px]' />
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>

                <button className='bg-darkest-blue-bg border-DarkGreen-br border px-4 py-2 rounded-[10px] text-white hover:text-blue-txt'>{t("artist.btn")}</button>

            </div>

        </div>
    )
}

export default TeacherArtistGuide
