import React, { useState } from 'react'
import { OnPlayingMusic } from '../StoredItems/storeItem'

const PlayedMusic = () => {

    const [isMusicOnPlay, setIsMusicOnPlay] = useState(true)
    const [likeDislike, setLikeDislike] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const playableMusic = OnPlayingMusic((state) => state.items[0])
    const removePlayableMusic = OnPlayingMusic(state => state.clearItems)

    console.log('playble : ', playableMusic);


    return (
        <div className='w-full p-4 border-neutralGreen-br border-t text-white sticky -bottom-0.5 bg-darkest-blue-bg/86 backdrop-blur-lg z-50 m-auto '>

            <button
                onClick={removePlayableMusic}
                className='absolute left-[50%] -top-[4%]'>
                <svg className="w-7 h-7 text-gray-800 dark:text-tiffany-txt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clipRule="evenodd" />
                </svg>

            </button>

            <div className='w-full mx-auto h-full flex flex-col gap-4'>




                <div className='flex justify-between items-start w-full '>
                    <div className='flex flex-col'>
                        <h2 className='text-[30px] md:hidden'>{playableMusic.songName.length > 25 ? playableMusic.songName.slice(0, 24) + "..." : playableMusic.songName}</h2>
                        <h2 className='text-[30px] hidden md:block xl:hidden'>{playableMusic.songName.length > 43 ? playableMusic.songName.slice(0, 42) + "..." : playableMusic.songName}</h2>
                        <h2 className='text-[30px] hidden xl:block'>{playableMusic.songName.length > 70 ? playableMusic.songName.slice(0, 66) + "..." : playableMusic.songName}</h2>
                        <p className='text-[15px]'><span className='text-blue-txt'> Artist :</span> {playableMusic?.username}</p>
                    </div>

                    <div dir='ltr' className='flex items-center gap-x-4'>
                        <button className='group flex gap-1'>
                            <svg className="w-6 h-6 text-gray-800 hover:scale-120 duration-[0.4s] hover:duration-[0.4s] dark:text-blue-txt" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd" />
                            </svg>
                            {playableMusic?.comment}
                        </button>

                        <div className='flex gap-1'>
                            <button onClick={() => setLikeDislike(!likeDislike)}>
                                {
                                    likeDislike ?
                                        <svg class="w-6 h-6 text-gray-800 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                        </svg>
                                        :
                                        <svg class="w-6 h-6 text-gray-800 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                        </svg>
                                }
                            </button>
                            <p>{likeDislike === true ? `${parseInt(playableMusic?.like) + 1}` : playableMusic?.like}</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-x-10 gap-y-4'>
                    <div dir='ltr' className='flex items-center mx-auto gap-x-4 order-2 w-[60%] lg:w-fit justify-between'>
                        <button>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0V6Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {
                            isMusicOnPlay ?
                                <button onClick={() => setIsMusicOnPlay(false)}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z" clipRule="evenodd" />
                                    </svg>

                                </button>
                                :
                                <button onClick={() => setIsMusicOnPlay(true)}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                        }
                        <button>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z" clipRule="evenodd" />
                            </svg>
                        </button>
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

            </div>

        </div>
    )
}

export default PlayedMusic
