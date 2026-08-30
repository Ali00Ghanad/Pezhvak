import React, { useState } from 'react'
import musicPic from '../../assets/file_000000002a3081f4b273d45edef76f35.png'
import playMusicIcon from '../../assets/playMusicIcon.svg'
import { useSavedItemsStore } from '../../StoredItems/storeItem'

const AllMusicsPanel = () => {

    const playedMusic = useSavedItemsStore(state => state.addItem)

    const AllSongs = [
        {
            id: '1',
            username: 'Afrooz Vm',
            songName: 'Delbar',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-pink-500 px-2 rounded text-white'>Pop</p>,
            like: '23',
            price: false,
            priceNumber: "Free",
            comment: '2',
        },

        {
            id: '2',
            username: 'Ali mx',
            songName: 'Nomad',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-mauve-500 px-2 rounded text-white'>Rock</p>,
            like: '2',
            price: false,
            priceNumber: "Free",
            comment: '0',
        },
        {
            id: '3',
            username: 'Sara',
            songName: 'Fake and dead',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-pink-500 px-2 rounded text-white'>Pop</p>,
            like: '210',
            price: true,
            priceNumber: "450,000 T",
            comment: '32',
        },
        {
            id: '4',
            username: 'Negar23',
            songName: 'For you my love',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-yellow-600 px-2 rounded text-white'>Rap</p>,
            like: '11',
            price: false,
            priceNumber: "Free",
            comment: '2',
        },
        {
            id: '5',
            username: 'bardia',
            songName: 'Love of my life cover',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-orange-500 px-2 rounded text-white'>Classic</p>,
            like: '135',
            price: true,
            priceNumber: "12,000 T",
            comment: '1',
        },
        {
            id: '6',
            username: 'Ali575',
            songName: 'Darkside',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '40',
            price: true,
            priceNumber: "20,000 T",
            comment: '23',
        },
        {
            id: '7',
            username: 'Armita',
            songName: 'Evil save us',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-yellow-600 px-2 rounded text-white'>Rap</p>,
            like: '2',
            price: false,
            priceNumber: "Free",
            comment: '0',
        },
        {
            id: '8',
            username: 'Mohsen',
            songName: 'تا بینهایت',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-mauve-500 px-2 rounded text-white'>Rock</p>,
            like: '112',
            priceNumber: "Free",
            price: false,
            comment: '56',
        },
        {
            id: '9',
            username: 'Golnaz',
            songName: 'عشق من | my love',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-mauve-500 px-2 rounded text-white'>Rock</p>,
            like: '45',
            price: true,
            priceNumber: "120,000 T",
            comment: '12',
        },
        {
            id: '10',
            username: 'Farn00sh',
            songName: 'آرزوی من نبود',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-orange-500 px-2 rounded text-white'>Classic</p>,
            like: '32',
            price: false,
            priceNumber: "Free",
            comment: '8',
        },
        {
            id: '5',
            username: 'bardia',
            songName: 'Love of my life cover',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-pink-500 px-2 rounded text-white'>Pop</p>,
            like: '135',
            price: true,
            priceNumber: "12,000 T",
            comment: '1',
        },
        {
            id: '6',
            username: 'Ali575',
            songName: 'Darkside',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-orange-500 px-2 rounded text-white'>Classic</p>,
            like: '40',
            price: true,
            priceNumber: "20,000 T",
            comment: '23',
        },
        {
            id: '7',
            username: 'Armita',
            songName: 'Evil save us',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-green-600 px-2 rounded text-white'>Jazz</p>,
            like: '2',
            price: false,
            priceNumber: "Free",
            comment: '0',
        },
        {
            id: '8',
            username: 'Mohsen',
            songName: 'تا بینهایت',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '112',
            priceNumber: "Free",
            price: false,
            comment: '56',
        },
        {
            id: '9',
            username: 'Golnaz',
            songName: 'عشق من | my love',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-orange-500 px-2 rounded text-white'>Classic</p>,
            like: '45',
            price: true,
            priceNumber: "120,000 T",
            comment: '12',
        },
        {
            id: '10',
            username: 'Farn00sh',
            songName: 'آرزوی من نبود',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '32',
            price: false,
            priceNumber: "Free",
            comment: '8',
        },
        {
            id: '5',
            username: 'bardia',
            songName: 'Love of my life cover',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-orange-500 px-2 rounded text-white'>Classic</p>,
            like: '135',
            price: true,
            priceNumber: "12,000 T",
            comment: '1',
        },
        {
            id: '6',
            username: 'Ali575',
            songName: 'Darkside',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '40',
            price: true,
            priceNumber: "20,000 T",
            comment: '23',
        },
        {
            id: '7',
            username: 'Armita',
            songName: 'Evil save us',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '2',
            price: false,
            priceNumber: "Free",
            comment: '0',
        },
        {
            id: '8',
            username: 'Mohsen',
            songName: 'تا بینهایت',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '112',
            priceNumber: "Free",
            price: false,
            comment: '56',
        },
        {
            id: '9',
            username: 'Golnaz',
            songName: 'عشق من | my love',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-indigo-900 px-2 rounded text-white'>Metal</p>,
            like: '45',
            price: true,
            priceNumber: "120,000 T",
            comment: '12',
        },
        {
            id: '10',
            username: 'Farn00sh',
            songName: 'آرزوی من نبود',
            musicPicture: musicPic,
            genres: <p className='w-fit text-[12px] bg-green-600 px-2 rounded text-white'>Jazz</p>,
            like: '32',
            price: false,
            priceNumber: "Free",
            comment: '8',
        },
    ]

    return (
        <div className='w-full bg-darkblueLowVolume-bg border border-DarkGreen-br p-6 rounded-[10px] flex flex-col
            max-md:p-4'>    
            <div className='w-full flex items-center justify-between border-b border-DarkGreen-br pb-4
                max-md:flex-col max-md:items-start' >

                <h2 className='text-[35px] font-bold'>All Musics</h2>

                <div>
                    <button className='bg-darkest-blue-bg rounded-[10px] text-white px-4 py-2 border-DarkGreen-br border'>All Musics</button>
                </div>

            </div>

            <div className='w-full grid grid-cols-5 gap-2 mt-8
                max-xl:grid-cols-4
                max-lg:grid-cols-3
                max-md:grid-cols-2
                max-sm:grid-cols-1
            '>
                {
                    AllSongs.map(item => (
                        <div data-aos="fade-up" className=' bg-darkest-blue-bg rounded-[10px]'>

                            <div className='w-full relative'>
                                <img src={item.musicPicture} className='w-full h-full object-cover rounded-t-[10px]' />
                                <button
                                    onClick={() => playedMusic(item)}
                                    className='absolute -bottom-5 left-3 hover:scale-120 duration-[0.4s] hover:duration-[0.4s] bg-green-bg p-2 rounded-full'>
                                    <img src={playMusicIcon} width={30} />
                                </button>
                            </div>

                            <div className='p-3 mt-5'>
                                <div className='flex flex-col gap-1'>
                                    {item.genres}
                                    <h3 className='text-[20px]'>{item.songName}</h3>
                                    <p className='text-muted-text'>{item.username}</p>
                                </div>
                                {
                                    item.price && (
                                        <button
                                            className={`border border-neutralGreen-br mt-4 px-2 hover:bg-tiffany-bg hover:text-darkest-blue-txt text-tiffany-txt rounded text-[14px]`}>
                                            {item.priceNumber}
                                        </button>
                                    )
                                }
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default AllMusicsPanel
