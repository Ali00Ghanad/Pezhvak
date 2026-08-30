import React from 'react'

const AtjCard = ({title , paragraph , button}) => {
    return (
        <div data-aos="fade-right" className='w-full p-6 text-white -bg-linear-330 from-green-bg via-dark-tiffany-bg to-green-bg
            rounded-[10px] flex items-center justify-between gap-4
            max-md:flex-col'>

            <div className=' w-full'>
                <h2 className='text-[30px] font-bold'>{title}</h2>
                <p>{paragraph}</p>
            </div>

            <button className='bg-darkest-blue-bg text-white hover:text-blue-txt rounded-[10px] px-6 py-3 text-nowrap
            max-md:w-full'>{button}</button>

        </div>
    )
}

export default AtjCard
