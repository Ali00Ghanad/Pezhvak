import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PlayedMusic from './Components/PlayedMusic'
import { useSavedItemsStore } from './StoredItems/storeItem'

export default function MainLayout() {
    const playableMusic = useSavedItemsStore((state) => state.items[0])

    return (

        <div className="min-h-screen relative bg-darkest-blue-bg max-md:text-[14px]">

            <div className='w-full flex flex-col items-center border-b border-DarkGreen-br'>
                <div className='w-full max-w-[1700px] px-8 py-4
                    max-lg:max-w-full max-lg:px-4'>
                    <Navbar />
                </div>
            </div>


            <div className='w-full max-w-[1700px] mx-auto px-8 py-6
                max-lg:max-w-full max-lg:px-4'>
                <Outlet />
            </div>

            <Footer />
            {
                playableMusic && (
                    <PlayedMusic />
                )
            }

        </div>
    )
}
