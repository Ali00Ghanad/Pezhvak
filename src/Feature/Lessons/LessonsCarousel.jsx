import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import musicPic from '../../assets/CorePicture.webp'
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import teachIcon from '../../assets/teacherCircleicon.svg'
import fileIcon from '../../assets/filesIcon.svg'
import playMusic from '../../assets/playMusicIcon.svg'
import timeIcon from '../../assets/clock.svg'
import { toast } from 'sonner';
import { addToFavorites } from '../../StoredItems/storeItem';

const LessonsCarousel = () => {


    const { t, i18n } = useTranslation();
    const [persian, setPersian] = useState(false)
    const [saveFavoriteId, setFavoriteSaveId] = useState([])
    const addFavoriteItem = addToFavorites((state) => state.addItem)
    const favoriteList = addToFavorites((state) => state.items)
    const removeFavoriteItem = addToFavorites((state) => state.removeItem)


    const checkFavoriteId = (id, item) => {
        setFavoriteSaveId(prev => prev.includes(id) ?
            prev.filter(item => item !== id) :
            [...prev, id])


        if (saveFavoriteId.includes(id)) {
            toast.success('Removed from Favorites')
            removeFavoriteItem(id)
        }
        else {
            addFavoriteItem(item)
            toast.success('Added to Favorites')
        }

    }

    useEffect(() => {
        const isPersian = i18n.language === "fa";
        isPersian ? setPersian(true) : setPersian(false)
    }, [i18n.language]);

    const [emblaRef] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps",
        direction: persian ? "rtl" : "ltr"
    });

    const packages = [
        {
            id: '1',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: "Free to Play",
            level: 'Intermediate',
            price: false,
            like: '135',
            time: '01:12:05',
            Files: '3',
        },
        {
            id: '2',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            level: 'Beginner',
            musicPicture: musicPic,
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: "1,200,000 T",
            Files: '32',
        },
        {
            id: '3',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: "Free to Play",
            price: false,
            Files: '2',
        },
        {
            id: '4',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: "6,500,000 T",
            Files: '40',
        },
        {
            id: '5',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: "100,000 T",
            Files: '3',
        },
        {
            id: '6',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            level: 'Beginner',
            musicPicture: musicPic,
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: "1,200,000 T",
            Files: '32',
        },
        {
            id: '7',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: "Free to Play",
            price: false,
            Files: '2',
        },
        {
            id: '8',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: "6,500,000 T",
            Files: '40',
        },
        {
            id: '9',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: "100,000 T",
            Files: '3',
        },
        {
            id: '10',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            level: 'Beginner',
            musicPicture: musicPic,
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: "1,200,000 T",
            Files: '32',
        },
        {
            id: '11',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: "Free to Play",
            price: false,
            Files: '2',
        },
        {
            id: '12',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: "6,500,000 T",
            Files: '40',
        },
        {
            id: '13',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: "100,000 T",
            Files: '3',
        },
        {
            id: '14',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            level: 'Beginner',
            musicPicture: musicPic,
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: "1,200,000 T",
            Files: '32',
        },
        {
            id: '15',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: "Free to Play",
            price: false,
            Files: '2',
        },
        {
            id: '16',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: "6,500,000 T",
            Files: '40',
        },
        {
            id: '17',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی آهنگ های سنتی ایرانی بصورتبسیبیسبیسهبتیسهبتیسهبیسهخبتیهخسبتسیهخ حرفه ای',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: "100,000 T",
            Files: '3',
        },
        {
            id: '18',
            teacher: 'Hossein M20',
            lessonTitle: 'How to play Nothing else matters by classic guitar',
            musicPicture: musicPic,
            priceNumber: "Free to Play",
            level: 'Pro',
            price: false,
            like: '23',
            time: '01:12:05',
            Files: '2',
        },
        {
            id: '19',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: "Free to Play",
            level: 'Intermediate',
            price: false,
            like: '135',
            time: '01:12:05',
            Files: '3',
        },
        {
            id: '20',
            teacher: 'Hossein M20',
            lessonTitle: 'How to play Nothing else matters by classic guitar',
            musicPicture: musicPic,
            priceNumber: "Free to Play",
            level: 'Pro',
            price: false,
            time: '01:12:05',
            like: '23',
            time: '01:12:05',
            Files: '2',
        },
        {
            id: '21',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: "Free to Play",
            level: 'Intermediate',
            price: false,
            like: '135',
            Files: '3',
        },
    ]

    return (
        <div data-aos='fade-up' className='w-full p-8 rounded-[10px] bg-darkblueLowVolume-bg border border-DarkGreen-br
            max-md:p-2'>

            <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-x-2'>
                        <img src={teachIcon} width={40} />
                        <h2 className='text-[25px]'>Teaching & Learning</h2>
                    </div>
                    <p className='text-muted-text'>Learn , teach and grow together.</p>
                </div>
                <Link to='/lessons' className='text-blue-txt h-fit text-nowrap'>{`View all >`}</Link>
            </div>

            <div ref={emblaRef} className='overflow-hidden cursor-grab '>
                <div className='w-full flex items-stretch gap-x-4 py-4 select-none'>
                    {
                        packages.map(item => (
                            <div
                                data-aos='fade-up'
                                key={item.id}
                                className='rounded-[10px] flex flex-col border border-DarkGreen-br bg-linear-140 from-darkest-blue-bg/30 to-green-bg/12 shrink-0 w-full max-w-[300px]'
                            >

                                <div className='relative w-full h-[200px] shrink-0'>

                                    <img
                                        src={musicPic}
                                        className='absolute inset-0 h-full w-full rounded-t-[10px] object-cover'
                                    />

                                    <div className='relative flex flex-col justify-between h-full p-2'>

                                        <button
                                            onClick={() => {
                                                checkFavoriteId(item.id, item)
                                            }}
                                            className='rounded-full p-1 bg-darkest-blue-bg w-fit'
                                        >
                                            {
                                                saveFavoriteId.includes(item.id) ? (
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-blue-txt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                    </svg>

                                                ) : (
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-blue-txt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                                    </svg>
                                                )
                                            }
                                        </button>

                                        <div className='flex items-end justify-between'>

                                            <button
                                                className='bg-green-bg rounded-full p-2 hover:scale-110 duration-400 hover:duration-400 cursor-pointer'
                                            >
                                                <img src={playMusic} className='w-[40px]' />
                                            </button>

                                            <p className='bg-darkest-blue-bg rounded-md px-2 text-blue-txt'>
                                                {item.time}
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <div className='p-4 flex flex-1 flex-col justify-between'>

                                    <div className='flex flex-col'>

                                        <p
                                            className={`px-3 py-1 rounded-md text-[14px] w-fit text-darkest-blue-txt font-bold
                                                     ${item.level === 'Beginner'
                                                    ? 'bg-sky-300'
                                                    : item.level === 'Intermediate'
                                                        ? 'bg-green-300'
                                                        : item.level === 'Pro'
                                                        && 'bg-yellow-300'
                                                }
                                                `}
                                        >
                                            {item.level}
                                        </p>

                                        <h3 className='mt-4'>
                                            {
                                                item.lessonTitle.length > 40
                                                    ? item.lessonTitle.slice(0, 39) + '...'
                                                    : item.lessonTitle
                                            }
                                        </h3>

                                        <Link className='text-muted-text hover:text-blue-txt w-fit'>
                                            {item.teacher}
                                        </Link>

                                    </div>

                                    <div className='flex justify-between mt-4 text-muted-text'>

                                        <div className='flex items-center gap-x-2'>
                                            <img src={timeIcon} width={20} />
                                            <p>{item.time}</p>
                                        </div>

                                        <div className='flex items-center gap-x-2'>
                                            <img src={fileIcon} width={14} />
                                            <p>{item.Files}</p>
                                        </div>

                                    </div>

                                    <button
                                        className='mt-4 border border-neutralGreen-br rounded-[10px] w-fit text-tiffany-txt px-4 py-2 hover:bg-tiffany-bg hover:text-darkest-blue-txt font-bold'
                                    >
                                        <p>{item.priceNumber}</p>
                                    </button>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default LessonsCarousel
