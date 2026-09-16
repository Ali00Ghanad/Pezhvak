import React, { useState } from 'react'
import { addToFavorites } from '../../StoredItems/storeItem';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import musicPic from '../../assets/CorePicture.webp'
import playMusic from '../../assets/playMusicIcon.svg'
import timeIcon from '../../assets/clock.svg'
import fileIcon from '../../assets/filesIcon.svg'

const FavoriteLessons = () => {

    const [grid, setGrid] = useState(true);
    const favoriteList = addToFavorites(state => state.items)
    const removeFavoriteItem = addToFavorites((state) => state.removeItem)
    const isPersian = i18n.language === "fa"
    console.log('favorite list', favoriteList);

    return (
        <div className='
            w-full
            flex flex-col 
            gap-4 p-4 
            rounded-[10px]
            bg-darkblueLowVolume-bg
            border border-DarkGreen-br
            '>

            <div className='w-full flex items-center justify-between 
            border-b border-DarkGreen-br
            '>

                <header className='flex gap-2 items-start *:text-tiffany-txt!'>
                    <svg class="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2.318.052h-.002A1 1 0 0 0 12 8v5.293A4.033 4.033 0 0 0 10.5 13C8.787 13 7 14.146 7 16s1.787 3 3.5 3 3.5-1.146 3.5-3c0-.107-.006-.211-.017-.313A1.04 1.04 0 0 0 14 15.5V9.766c.538.493 1 1.204 1 2.234a1 1 0 1 0 2 0c0-1.881-.956-3.14-1.86-3.893a6.4 6.4 0 0 0-1.636-.985 4.009 4.009 0 0 0-.165-.063l-.014-.005-.005-.001-.002-.001ZM9 16c0-.356.452-1 1.5-1s1.5.644 1.5 1-.452 1-1.5 1S9 16.356 9 16Z" clip-rule="evenodd" />
                    </svg>

                    <h2 >Favorite Lessons</h2>
                </header>

                <section className='flex items-center gap-4'>

                    <button onClick={() => setGrid(true)}>
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    <button onClick={() => setGrid(false)}>
                        <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                        </svg>
                    </button>

                </section>

            </div>

            <div>
                {
                    grid ?
                        (
                            <div>
                                {
                                    favoriteList != "" ?
                                        (
                                            <div className='grid grid-cols-5 gap-4 flex-wrap overflow-hidden place-items-center
                                                max-xl:grid-cols-4
                                                max-lg:grid-cols-3
                                                max-md:grid-cols-2
                                                max-sm:grid-cols-1'>
                                                {
                                                    favoriteList.map((item) => (
                                                        <article
                                                            data-aos='fade-up'
                                                            key={item.id}
                                                            className='rounded-[10px] flex flex-col border border-DarkGreen-br bg-linear-140 from-darkest-blue-bg/30 to-green-bg/12 shrink-0 w-full'
                                                        >

                                                            <div className='relative w-full h-[200px] shrink-0'>

                                                                <img
                                                                    src={musicPic}
                                                                    className='absolute inset-0 h-full w-full rounded-t-[10px] object-cover'
                                                                />

                                                                <div className='relative flex flex-col justify-between h-full p-2'>

                                                                    <button
                                                                        onClick={() => removeFavoriteItem(item.id)}
                                                                        className='rounded-full p-1 bg-darkest-blue-bg/50 w-[25px] h-[25px] flex items-center justify-center'
                                                                    >
                                                                        <svg class="w-6 h-6 text-blue-txt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                                        </svg>

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

                                                        </article>
                                                    ))
                                                }
                                            </div>
                                        )
                                        :
                                        (
                                            <div className='flex justify-center gap-2 items-center'>

                                                <h3 className='text-muted-text!'>Your List Is Empty !</h3>

                                                <Link to="/lessons" className='flex gap-2 text-blue-txt! group'>
                                                    Go To Lesson Page
                                                    <div className='group-hover:pl-4 duration-[0.4s] group-hover:duration-[0.4s]'>
                                                        {
                                                            isPersian ?
                                                                (
                                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                                                    </svg>
                                                                )
                                                                :
                                                                (
                                                                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                                                    </svg>

                                                                )
                                                        }
                                                    </div>
                                                </Link>

                                            </div>
                                        )
                                }
                            </div>
                        )

                        :

                        (
                            <div className='flex flex-col gap-2 overflow-hidden'>
                                {
                                    favoriteList.map((item, index) => (
                                        <button data-aos="fade-up" key={index} className={`
                                        flex justify-between items-end flex-wrap
                                        gap-x-8
                                        bg-darkest-blue-bg
                                        p-4 rounded-sm
                                        border-neutralGreen-br
                                        duration-400 hover:duration-400
                                        ${isPersian ? "hover:border-r-4" : "hover:border-l-4"}
                                        text-nowrap
                                        *:text-muted-text *:flex *:items-center *:gap-1
                                        `}>


                                            <p className='text-wrap flex text-white!'>
                                                <span className='text-nowrap text-muted-text'>{index + 1} - </span>

                                                {item.lessonTitle}
                                            </p>

                                            <p>
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>

                                                {item.teacher}
                                            </p>


                                            <p>
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5V8s3 1 3 4m3-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-6 12c0 1.105-1.12 2-2.5 2S8 17.105 8 16s1.12-2 2.5-2 2.5.895 2.5 2Z" />
                                                </svg>

                                                {item.Files} files
                                            </p>

                                            <p>
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>

                                                {item.time}
                                            </p>

                                            <p className=' text-blue-txt!'>
                                                {item.priceNumber}
                                            </p>

                                        </button>
                                    ))
                                }
                            </div>
                        )
                }
            </div>

        </div>
    )
}

export default FavoriteLessons
