import React from 'react'
import { MdAddCircle } from "react-icons/md";

export default function FastActionBtn() {
    return (
        <div className='fixed right-8 bottom-6'>
            <MdAddCircle className='text-center  w-[40px] h-[40px] cursor-pointer rounded-full hover:scale-130 duration-[0.4s] hover:duration-[0.4s] text-white' />
        </div>
    )
}
