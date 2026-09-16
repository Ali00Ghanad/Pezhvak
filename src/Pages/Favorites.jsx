import React from 'react'
import i18n from '../i18n'
import { t } from 'i18next'
import FavoriteLessons from '../Feature/Favorites/FavoriteLessons'
import FavoriteMusics from '../Feature/Favorites/FavoriteMusics'

const Favorites = () => {

    const isPersian = i18n.language === "fa"


    return (

        <div className='w-full flex flex-col min-h-full'>

            <header>
                <h1 className={`font-bold px-2 border-neutralGreen-br ${isPersian ? "border-r-4" : "border-l-4"}`}>Favorites</h1>
            </header>

            <main className='mt-4 gap-6 flex flex-col'>
                <FavoriteLessons />
                <FavoriteMusics />
            </main>

        </div>
    )
}

export default Favorites
