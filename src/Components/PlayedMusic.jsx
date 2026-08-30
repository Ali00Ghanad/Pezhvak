import React, { useState } from 'react'
import { useSavedItemsStore } from '../StoredItems/storeItem'
import commentIcon from '../assets/messageIcon.svg'
import { Link } from 'react-router-dom'
import nextIcon from '../assets/nextMusicIcon.svg'
import previousIcon from '../assets/previousMusicIcon.svg'
import stopIcon from '../assets/pauseMusicIcon.svg'
import playIcon from '../assets/playMusicIcon.svg'

const PlayedMusic = () => {

    const [isMusicOnPlay, setIsMusicOnPlay] = useState(true)
    const [likeDislike, setLikeDislike] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const playableMusic = useSavedItemsStore((state) => state.items[0])
    const removePlayableMusic = useSavedItemsStore(state => state.clearItems)

    console.log('playble : ', playableMusic);


    return (
        <div className='w-full px-6 pb-3 pt-6 border-neutralGreen-br border-t text-white sticky bottom-0 bg-darkest-blue-bg/86 backdrop-blur-lg z-50 m-auto '>

            <div className='w-[80%] mx-auto h-full relative flex flex-col gap-4'>
                <div className='flex justify-between items-start w-full'>
                    <div className='flex flex-col leading-6'>
                        <h3 className='text-[30px] '>{playableMusic?.songName}</h3>
                        <p className='text-[15px]'><span className='text-blue-txt'> Artist :</span> {playableMusic?.username}</p>
                    </div>

                    <div dir='ltr' className='flex items-center gap-x-8'>
                        <button className='group flex gap-2'>
                            <img src={commentIcon} width={20} className='group-hover:scale-110 duration-[0.4s] group-hover:duration-400'/>
                            {playableMusic?.comment}
                        </button>

                        <div className='flex gap-2'>
                            <div
                                onClick={() => setLikeDislike(!likeDislike)}
                                className={`${likeDislike ? "bg-red-500" : "bg-white"} h-[20px] aspect-square [clip-path:shape(from_50%_91%,line_to_90%_50%,arc_to_50%_9%_of_1%,arc_to_10%_50%_of_1%)]
                                hover:cursor-pointer hover:scale-120 duration-[0.3s] hover:duration-[0.3s]`}
                            ></div>
                            <p>{likeDislike === true ? `${parseInt(playableMusic?.like) + 1}` : playableMusic?.like}</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <div dir='ltr' className='flex items-center mx-auto gap-x-4'>
                        <button><img src={previousIcon} width={35} /></button>
                        {
                            isMusicOnPlay ? <button onClick={() => setIsMusicOnPlay(false)}><img src={stopIcon} width={35} /></button>
                                : <button onClick={() => setIsMusicOnPlay(true)}><img src={playIcon} width={35} /></button>
                        }
                        <button><img src={nextIcon} width={35} /></button>
                    </div>

                    <div className='w-full flex gap-2 justify-between'>
                        <p className=''>00:01</p>
                        <input dir='ltr' type='range' className='w-full' />
                        <p className=''>{playableMusic.totalTime}</p>

                        <button onClick={() => setShowVolume(!showVolume)} className='relative ml-4'>
                            <i>Icon</i>
                            {
                                showVolume && (
                                    <div className='absolute -right-12 bottom-22 p-1 rounded-full flex items-center justify-center bg-tiffany-bg -rotate-90'>
                                        <input dir='ltr' type='range' className=' w-fit!' />
                                    </div>
                                )
                            }
                        </button>
                    </div>
                </div>

                <button
                    onClick={removePlayableMusic}
                    className='rounded-full bg-neutralGreen-br text-white font-bold w-[25px] h-[25px] absolute -top-[40%] right-[50%] hover:animate-none animate-bounce'>Ꭓ</button>
            </div>

        </div>
    )
}

export default PlayedMusic
