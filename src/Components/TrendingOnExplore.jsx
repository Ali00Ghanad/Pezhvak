import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import musicPic from '../assets/file_000000002a3081f4b273d45edef76f35.png'
import playMusicIcon from '../assets/playMusicIcon.svg'
import { useSavedItemsStore } from "../StoredItems/storeItem";
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import commentIcon from '../assets/messageIcon.svg'
import trendIcon from '../assets/TrendIcon.svg'

const TrendingOnExplore = () => {

  const { t, i18n } = useTranslation();
  const [persian, setPersian] = useState(false)
  const playedMusic = useSavedItemsStore((state) => state.addItem);
  const [saveFavoriteId, setSaveFavoriteId] = useState([])

  const checkFavoriteId = (id) => {
    setSaveFavoriteId(
      prev => prev.includes(id) ? // [ 1 , 2 , 3]
        prev.filter(item => item !== id) :
        [...prev, id]
    )
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

  const trendingUsers = [
    {
      id: '1',
      username: 'Afrooz Vm',
      songName: 'Delbar',
      musicPicture: musicPic,
      like: '23',
      price: false,
      priceNumber: "Free",
      comment: '2',
      totalTime: '2:05'
    },

    {
      id: '2',
      username: 'Ali mx',
      songName: 'Nomad',
      musicPicture: musicPic,
      like: '2',
      price: false,
      priceNumber: "Free",
      comment: '0',
      totalTime: '2:05'
    },
    {
      id: '3',
      username: 'Sara',
      songName: 'Fake and dead',
      musicPicture: musicPic,
      like: '210',
      price: true,
      priceNumber: "450,000 T",
      comment: '32',
      totalTime: '2:05'
    },
    {
      id: '4',
      username: 'Negar23',
      songName: 'For you my love',
      musicPicture: musicPic,
      like: '11',
      price: false,
      priceNumber: "Free",
      comment: '2',
      totalTime: '2:05'
    },
    {
      id: '5',
      username: 'bardia',
      songName: 'Love of my life cover',
      musicPicture: musicPic,
      like: '135',
      price: true,
      priceNumber: "12,000 T",
      comment: '1',
      totalTime: '2:05'
    },
    {
      id: '6',
      username: 'Ali575',
      songName: 'Darkside',
      musicPicture: musicPic,
      like: '40',
      price: true,
      priceNumber: "20,000 T",
      comment: '23',
      totalTime: '2:05'
    },
    {
      id: '7',
      username: 'Armita',
      songName: 'Evil save us',
      musicPicture: musicPic,
      like: '2',
      price: false,
      priceNumber: "Free",
      comment: '0',
      totalTime: '2:05'
    },
    {
      id: '8',
      username: 'Mohsen',
      songName: 'تا بینهایت',
      musicPicture: musicPic,
      like: '112',
      priceNumber: "Free",
      price: false,
      comment: '56',
      totalTime: '2:05'
    },
    {
      id: '9',
      username: 'Golnaz',
      songName: 'عشق من | my love',
      musicPicture: musicPic,
      like: '45',
      price: true,
      priceNumber: "120,000 T",
      comment: '12',
      totalTime: '2:05'
    },
    {
      id: '10',
      username: 'Farn00sh',
      songName: 'آرزوی من نبود',
      musicPicture: musicPic,
      like: '32',
      price: false,
      priceNumber: "Free",
      comment: '8',
      totalTime: '2:05'
    },

  ]

  return (
    <div data-aos='fade-up' className='w-full p-8 rounded-[10px] bg-darkblueLowVolume-bg border border-DarkGreen-br 
      max-md:p-2'>

      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-x-2'>
          <img src={trendIcon} width={40} />
          <h2 className='text-[25px]'>Trending on Explore</h2>
        </div>
        <Link to='/trends&explore' className='text-blue-txt text-nowrap'>{`View all >`}</Link>
      </div>

      <div ref={emblaRef} className='overflow-hidden cursor-grab'>
        <div className='w-full flex gap-x-4 py-4 select-none'>
          {
            trendingUsers.map(item => (
              <div data-aos='fade-up' key={item.id} className='rounded-[10px] border border-DarkGreen-br bg-linear-140 from-darkest-blue-bg/30 to-green-bg/12 flex flex-col shrink-0 max-w-[300px] w-full'>

                <div className='relative w-full overflow-hidden min-h-[150px] flex items-end'>
                  <img loading='lazy' src={item.musicPicture} className=' w-full h-full object-cover rounded-t-[10px] inset-0 absolute' />

                  <div className='relative z-10 px-3 flex justify-between items-end w-full pb-2'>
                    <button
                      onClick={() => playedMusic(item)}
                      className='hover:scale-110 duration-[0.4s] hover:duration-[0.4s] bg-green-bg rounded-full p-2'><img src={playMusicIcon} width={35} /></button>

                    <div className='px-2 bg-darkest-blue-bg text-muted-text rounded-md'>
                      {item.totalTime}
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-between px-4 py-4 gap-4 text-muted-text text-[14px] h-full'>

                  <div>
                    <h3 className='text-[20px]'>{item.songName}</h3>
                    <Link className='hover:text-blue-txt! bg-none! hover:bg-transparent! p-0! w-fit'>{item.username}</Link>
                  </div>

                  {
                    item.price && (
                      <button className='border border-neutralGreen-br rounded-md w-fit text-tiffany-txt px-2 py-1 hover:bg-tiffany-bg hover:text-darkest-blue-txt font-bold'>
                        {item.priceNumber}
                      </button>
                    )
                  }

                  <div className='flex gap-x-2 w-full'>

                    <div className='flex items-center gap-2'>
                      {item.comment}
                      <img src={commentIcon} width={15} />
                    </div>

                    <div className='flex items-center gap-2'>
                      {item.like}
                    </div>

                  </div>

                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TrendingOnExplore
