import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import musicPic from '../../assets/file_000000002a3081f4b273d45edef76f35.png'
import tickIcon from '../../assets/tick-circle-svgrepo-com.svg'
import crownPremium from '../../assets/premiumCrown.svg'
import followIcon from '../../assets/followIcon.svg'
import { toast } from 'sonner'

const ActivityTopMemberPremium = () => {

  const [getId, setGetId] = useState([])

  function topCreatorsId(id, name) {
    setGetId(prev => prev.includes(id) ?
      prev.filter(i => i !== id) :
      [...prev, id]
    )

    getId.includes(id) ?
      toast.success(`You Unfollowed ${name}`) :
      toast.success(`You Followed ${name}`)
  }

  const topCreators = [
    {
      id: '1',
      username: 'Afrooz Vm',
      userId: '@afrooz34',
      musicPicture: musicPic,
      like: '23',
    },

    {
      id: '2',
      username: 'Ali mx',
      userId: '@alimx23',
      musicPicture: musicPic,
      like: '2',
    },
    {
      id: '3',
      username: 'Sara',
      userId: '@sarah_mohammadi',
      musicPicture: musicPic,
      like: '210',
    },
    {
      id: '4',
      username: 'Negar23',
      userId: '@Negar_Ol34',
      musicPicture: musicPic,
      like: '11',
    },
    {
      id: '5',
      username: 'bardia',
      userId: '@s23Df_s34',
      musicPicture: musicPic,
      like: '135',
    }
  ]

  return (
    <div data-aos="fade-up" className='w-full grid grid-cols-8 gap-4
      max-sm:text-[10px]'>

      <div className='bg-linear-290 from-darkblueLowVolume-bg col-span-3 to-dark-tiffany-bg/20 flex flex-col p-8 rounded-[10px] gap-y-6 border border-DarkGreen-br
        max-lg:col-span-8
        max-md:p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-[25px]'>Top Creator</h2>
          <Link className='text-blue-txt'>{`View all >`}</Link>
        </div>

        <div className='flex flex-col w-full gap-y-4'>
          {
            topCreators.map((item, index) => (
              <div key={index} className='w-full flex justify-between '>

                <div className='flex items-center gap-x-4
                  max-md:gap-x-2'>
                  <p className='text-muted-text'>{item.id}</p>

                  <div className='rounded-full shrink-0 w-[45px] h-[45px]'>
                    <img src={item.musicPicture} className=' w-full h-full rounded-full object-cover shrink-0' />
                  </div>

                  <div>
                    <h3>{item.username}</h3>
                    <p className='text-muted-text'>{item.userId}</p>
                  </div>

                </div>

                <div className='flex items-center justify-between gap-x-4
                  max-md:gap-x-2'>
                  <div className='flex items-center justify-between w-full gap-x-2 text-muted-text'>
                    <img src={followIcon} width={15} />
                    <p>{item.like}</p>
                  </div>

                  <button
                    onClick={() => {
                      topCreatorsId(item.id, item.username)
                    }}
                    className='bg-tiffany-bg px-3 py-1 font-bold text-darkest-blue-txt rounded-md hover:bg-green-bg hover:text-white'
                  >
                    {
                      getId.includes(item.id) ? 'Unfollow' : 'Follow'
                    }
                  </button>

                </div>

              </div>
            ))
          }
        </div>

      </div>

      <div className='bg-linear-370 from-darkblueLowVolume-bg to-dark-tiffany-bg/20 flex flex-col p-8 col-span-3 rounded-[10px] gap-y-6 border border-DarkGreen-br
      max-lg:col-span-4
      max-sm:col-span-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-[25px]'>Your Activity</h2>
          <Link className='text-blue-txt '>{`View all >`}</Link>
        </div>

        <div className='flex flex-col w-full gap-y-4'>
          <div className='w-full flex justify-between'>

            <div className='flex items-center gap-x-4'>
              <div className='rounded-full shrink-0 w-[45px] h-[45px]'>
                <img width={40} src={musicPic} className=' w-full h-full rounded-full object-cover shrink-0' />
              </div>

              <div>
                <h3>New Comment on</h3>
                <p className='text-muted-text'>Mehran Ghorbani</p>
              </div>
            </div>

            <div className='flex items-center gap-x-4'>
              <button className='text-blue-txt'>See</button>
            </div>

          </div>
        </div>

        <div className='flex flex-col w-full gap-y-4'>
          <div className='w-full flex justify-between'>

            <div className='flex items-center gap-x-4'>
              <div className='rounded-full shrink-0 w-[45px] h-[45px]'>
                <img width={40} src={musicPic} className=' w-full h-full rounded-full object-cover shrink-0' />
              </div>

              <div>
                <h3>Last Upload</h3>
                <p className='text-muted-text'>12:03 PM</p>
              </div>
            </div>

            <div className='flex items-center gap-x-4'>
              <button className='text-blue-txt'>See</button>
            </div>

          </div>
        </div>

        <div className='flex flex-col w-full gap-y-4'>
          <div className='w-full flex justify-between'>

            <div className='flex items-center gap-x-4'>
              <div className='rounded-full shrink-0 w-[45px] h-[45px]'>
                <img width={40} src={musicPic} className=' w-full h-full rounded-full object-cover shrink-0' />
              </div>

              <div>
                <h3>Recently Upload</h3>
                <p className='text-muted-text'>09:02 PM</p>
              </div>
            </div>

            <div className='flex items-center gap-x-4'>
              <button className='text-blue-txt'>See</button>
            </div>

          </div>
        </div>

      </div>

      <div className='bg-linear-140 from-darkblueLowVolume-bg to-dark-tiffany-bg/20 flex flex-col justify-between p-8 col-span-2 rounded-[10px] gap-y-6 border border-DarkGreen-br
      max-lg:col-span-4
      max-sm:col-span-8'>

        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center gap-x-2'>
            <img width={55} src={crownPremium} />
            <h2 className='text-[25px]'>Go Premium</h2>
          </div>
          <p className='text-muted-text'>Share your music as premuim after 100 followers.</p>
        </div>

        <div className='flex flex-col w-full'>

          <div className='flex flex-col w-full gap-5'>

            <div className='flex items-center gap-x-4'>
              <img width={25} src={tickIcon} />
              <p className='text-dark-tiffany-txt'>Sell your songs</p>
            </div>

            <div className='flex items-center gap-x-4'>
              <img width={25} src={tickIcon} />
              <p className='text-dark-tiffany-txt'>Get paid by fans</p>
            </div>

            <div className='flex items-center gap-x-4'>
              <img width={25} src={tickIcon} />
              <p className='text-dark-tiffany-txt'>Build your audience</p>
            </div>

            <div className='flex items-center gap-x-4'>
              <img width={25} src={tickIcon} />
              <p className='text-dark-tiffany-txt'>Grow your career</p>
            </div>

          </div>

        </div>

        <button className='w-full bg-tiffany-bg text-darkest-blue-txt rounded-[10px] py-2 text-[20px] font-bold hover:bg-green-bg hover:text-white'>Learn More</button>

      </div>

    </div>
  )
}

export default ActivityTopMemberPremium
