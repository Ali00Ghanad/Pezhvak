
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import musicPic from '../../assets/file_000000002a3081f4b273d45edef76f35.png'
import playMusic from '../../assets/playMusicIcon.svg'
import saveToFavoriteIcon from '../../assets/save.svg'
import fileIcon from '../../assets/filesIcon.svg'
import tick from '../../assets/tick-circle-svgrepo-com.svg'

const LessonsSection = () => {
    const [saveFavoriteId, setFavoriteSaveId] = useState([])
    const [showFilters, setShowFilters] = useState(false)

    const checkFavoriteId = (id) => {
        setFavoriteSaveId((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )

        saveFavoriteId.includes(id)
            ? toast.success('Removed from Favorites')
            : toast.success('Added to Favorites')
    }

    const packages = [
        {
            id: '1',
            teacher: 'Hossein M20',
            lessonTitle:
                'How to play Nothing else matters by classic guitar',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Pro',
            price: false,
            like: '23',
            time: '01:12:05',
            Files: '2',
        },
        {
            id: '2',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Intermediate',
            price: false,
            like: '135',
            time: '01:12:05',
            Files: '3',
        },
        {
            id: '3',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            musicPicture: musicPic,
            level: 'Beginner',
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: '1,200,000 T',
            Files: '32',
        },
        {
            id: '4',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: 'Free to Play',
            price: false,
            Files: '2',
        },
        {
            id: '5',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: '6,500,000 T',
            Files: '40',
        },
        {
            id: '6',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: '100,000 T',
            Files: '3',
        },
        {
            id: '7',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            musicPicture: musicPic,
            level: 'Beginner',
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: '1,200,000 T',
            Files: '32',
        },
        {
            id: '8',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: 'Free to Play',
            price: false,
            Files: '2',
        },
        {
            id: '9',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: '6,500,000 T',
            Files: '40',
        },
        {
            id: '10',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: '100,000 T',
            Files: '3',
        },
        {
            id: '11',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            musicPicture: musicPic,
            level: 'Beginner',
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: '1,200,000 T',
            Files: '32',
        },
        {
            id: '12',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: 'Free to Play',
            price: false,
            Files: '2',
        },
        {
            id: '13',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: '6,500,000 T',
            Files: '40',
        },
        {
            id: '14',
            teacher: 'Fatemeh',
            lessonTitle: 'Piano for beginners',
            musicPicture: musicPic,
            level: 'Beginner',
            like: '11',
            time: '01:12:05',
            price: true,
            priceNumber: '1,200,000 T',
            Files: '32',
        },
        {
            id: '15',
            teacher: 'Farimah khaleghi',
            lessonTitle: 'Violin for intermediates',
            musicPicture: musicPic,
            level: 'Intermediate',
            like: '23',
            time: '01:12:05',
            priceNumber: 'Free to Play',
            price: false,
            Files: '2',
        },
        {
            id: '16',
            teacher: 'Parham dastpak',
            lessonTitle: 'guitar Lesson from intern to pro',
            musicPicture: musicPic,
            like: '2',
            time: '01:12:05',
            level: 'Beginner',
            price: true,
            priceNumber: '6,500,000 T',
            Files: '40',
        },
        {
            id: '17',
            teacher: 'Narges',
            lessonTitle: 'آموزش نت خوانی',
            musicPicture: musicPic,
            level: 'Beginner',
            price: true,
            like: '210',
            time: '01:12:05',
            priceNumber: '100,000 T',
            Files: '3',
        },
        {
            id: '18',
            teacher: 'Hossein M20',
            lessonTitle:
                'How to play Nothing else matters by classic guitar',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Pro',
            price: false,
            like: '23',
            time: '01:12:05',
            Files: '2',
        },
        {
            id: '19',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Intermediate',
            price: false,
            like: '135',
            time: '01:12:05',
            Files: '3',
        },
        {
            id: '20',
            teacher: 'Hossein M20',
            lessonTitle:
                'How to play Nothing else matters by classic guitar',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Pro',
            price: false,
            like: '23',
            time: '01:12:05',
            Files: '2',
        },
        {
            id: '21',
            teacher: 'Nazanin Moradi',
            lessonTitle: 'آموزش سلفژ شب ستارگان',
            musicPicture: musicPic,
            priceNumber: 'Free to Play',
            level: 'Intermediate',
            price: false,
            like: '135',
            time: '01:12:05',
            Files: '3',
        },
    ]

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
        },
    ]

    const getLevelStyle = (level) => {
        if (level === 'Beginner') {
            return 'bg-sky-300'
        }

        if (level === 'Intermediate') {
            return 'bg-green-300'
        }

        if (level === 'Pro') {
            return 'bg-yellow-300'
        }

        return ''
    }

    return (
        <div
            data-aos="fade-up"
            className="
                w-full
                max-w-[1700px]
                mx-auto
                flex
                items-start
                gap-5
                min-w-0

                max-xl:flex-col
            "
        >
            {/* =========================
                DESKTOP SIDEBAR
            ========================== */}

            <aside
                className={`
                    shrink-0
                    w-[380px]
                    h-[calc(100vh-32px)]
                    sticky
                    top-4

                    flex-col
                    gap-4

                    overflow-y-auto
                    scrollbar-thin
                    scrollbar-thumb-tiffany-bg

                    rounded-[10px]
                    border
                    border-DarkGreen-br
                    bg-darkblueLowVolume-bg
                    px-4

                    [&>section]:border-b
                    [&>section]:border-DarkGreen-br
                    [&>section]:pb-4

                    max-xl:static
                    max-xl:w-full
                    max-xl:h-auto
                    max-xl:max-h-none

                    hidden
                    xl:flex
                `}
            >
                {/* Search */}
                <section>
                    <h3 className="font-bold mt-4 mb-3">
                        Search in Lessons
                    </h3>

                    <div
                        className="
                            rounded-[10px]
                            bg-darkest-blue-bg
                            p-3
                        "
                    >
                        <input
                            type="text"
                            placeholder="Search lessons..."
                            className="
                                w-full
                                bg-transparent
                                border-none
                                outline-none
                                text-sm
                                text-white
                                placeholder:text-muted-text
                            "
                        />
                    </div>
                </section>

                {/* Categories */}
                <section>
                    <h3 className="font-bold mb-3">
                        Categories
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-muted-text">
                        {[
                            'All Categories',
                            'Music Production',
                            'Songwriting',
                            'Guitar',
                            'Vocal',
                            'Mixing & Mastering',
                            'Music Theory',
                            'Drums',
                            'Piano & Keys',
                            'DJ & Electronics',
                            'Other',
                        ].map((category) => (
                            <button
                                key={category}
                                className="
                                    text-left
                                    hover:text-blue-txt
                                    duration-200
                                "
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Level */}
                <section>
                    <h3 className="font-bold mb-3">
                        Level
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-muted-text">
                        {[
                            'All Levels',
                            'Beginner',
                            'Intermediate',
                            'Pro',
                        ].map((level) => (
                            <label
                                key={level}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    cursor-pointer
                                "
                            >
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                />
                                <span>{level}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Price */}
                <section>
                    <h3 className="font-bold mb-3">
                        Price
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-muted-text">
                        {['All', 'Free', 'Paid'].map((price) => (
                            <label
                                key={price}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    cursor-pointer
                                "
                            >
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                />
                                <span>{price}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Instructor */}
                <section className="border-none">
                    <h3 className="font-bold mb-3">
                        Instructor
                    </h3>

                    <div className="flex flex-col gap-4">
                        <div
                            className="
                                rounded-[10px]
                                bg-darkest-blue-bg
                                p-3
                            "
                        >
                            <input
                                type="text"
                                placeholder="Search Instructor..."
                                className="
                                    w-full
                                    bg-transparent
                                    border-none
                                    outline-none
                                    text-sm
                                    text-white
                                    placeholder:text-muted-text
                                "
                            />
                        </div>

                        <div className="flex flex-col">
                            {topCreators.map((item) => (
                                <div
                                    key={item.id}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        py-3
                                        border-b
                                        border-DarkGreen-br
                                        last:border-none
                                    "
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div
                                            className="
                                                shrink-0
                                                w-[30px]
                                                h-[30px]
                                                rounded-full
                                                overflow-hidden
                                            "
                                        >
                                            <img
                                                src={item.musicPicture}
                                                alt={item.username}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                "
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-sm truncate">
                                                {item.username}
                                            </h3>

                                            <p className="text-xs text-muted-text truncate">
                                                {item.userId}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </aside>

            {/* =========================
                MOBILE / TABLET FILTER
            ========================== */}

            <div className="xl:hidden w-full">
                <div
                    className="
                        rounded-[10px]
                        border
                        border-DarkGreen-br
                        bg-darkblueLowVolume-bg
                        overflow-hidden
                    "
                >
                    <div className="p-3 sm:p-4">
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex-1
                                    rounded-[10px]
                                    bg-darkest-blue-bg
                                    px-3
                                    py-2.5
                                "
                            >
                                <input
                                    type="text"
                                    placeholder="Search lessons..."
                                    className="
                                        w-full
                                        bg-transparent
                                        border-none
                                        outline-none
                                        text-sm
                                        text-white
                                        placeholder:text-muted-text
                                    "
                                />
                            </div>

                            <button
                                onClick={() =>
                                    setShowFilters(!showFilters)
                                }
                                className="
                                    shrink-0
                                    rounded-[10px]
                                    border
                                    border-DarkGreen-br
                                    px-4
                                    py-2.5
                                    text-sm
                                    hover:bg-darkest-blue-bg
                                    duration-200
                                "
                            >
                                Filters
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div
                            className="
                                border-t
                                border-DarkGreen-br
                                p-4
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-5
                            "
                        >
                            {/* Categories */}
                            <div>
                                <h3 className="font-bold mb-3">
                                    Categories
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'All',
                                        'Production',
                                        'Songwriting',
                                        'Guitar',
                                        'Vocal',
                                        'Theory',
                                        'Drums',
                                        'Piano',
                                    ].map((category) => (
                                        <button
                                            key={category}
                                            className="
                                                rounded-full
                                                border
                                                border-DarkGreen-br
                                                px-3
                                                py-1.5
                                                text-xs
                                                text-muted-text
                                                hover:text-white
                                                hover:bg-darkest-blue-bg
                                                duration-200
                                            "
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Level */}
                            <div>
                                <h3 className="font-bold mb-3">
                                    Level
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        'All Levels',
                                        'Beginner',
                                        'Intermediate',
                                        'Pro',
                                    ].map((level) => (
                                        <label
                                            key={level}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                text-muted-text
                                                cursor-pointer
                                            "
                                        >
                                            <input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            {level}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <h3 className="font-bold mb-3">
                                    Price
                                </h3>

                                <div className="flex gap-4">
                                    {['All', 'Free', 'Paid'].map(
                                        (price) => (
                                            <label
                                                key={price}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    text-muted-text
                                                    cursor-pointer
                                                "
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="cursor-pointer"
                                                />
                                                {price}
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Instructor */}
                            <div>
                                <h3 className="font-bold mb-3">
                                    Instructor
                                </h3>

                                <input
                                    type="text"
                                    placeholder="Search Instructor..."
                                    className="
                                        w-full
                                        rounded-[10px]
                                        bg-darkest-blue-bg
                                        px-3
                                        py-2.5
                                        text-sm
                                        outline-none
                                    "
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* =========================
                MAIN CONTENT
            ========================== */}

            <main
                className="
                    flex
                    flex-col
                    gap-5
                    flex-1
                    min-w-0
                    w-full
                "
            >
                {/* Sort */}
                <div
                    className="
                        w-full
                        flex
                        items-center
                        justify-between
                        gap-3

                        rounded-[10px]
                        border
                        border-DarkGreen-br
                        bg-darkblueLowVolume-bg

                        p-3
                        sm:p-4
                    "
                >
                    <p className="text-sm text-muted-text">
                        All Lessons
                    </p>

                    <button
                        className="
                            shrink-0
                            rounded-[10px]
                            border
                            border-white
                            px-4
                            py-2
                            text-sm
                            text-white
                            hover:bg-white
                            hover:text-darkest-blue-txt
                            duration-200
                        "
                    >
                        Sort by
                    </button>
                </div>

                {/* Cards */}
                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-2
                        2xl:grid-cols-3
                        gap-4
                        sm:gap-5
                    "
                >
                    {packages.map((item) => (
                        <article
                            data-aos="fade-up"
                            key={item.id}
                            className="
                                w-full
                                min-w-0
                                overflow-hidden

                                rounded-[10px]
                                border
                                border-DarkGreen-br
                                bg-darkblueLowVolume-bg
                            "
                        >
                            {/* Image */}
                            <div
                                className="
                                    relative
                                    w-full
                                    aspect-[16/9]
                                    min-h-[180px]
                                    sm:min-h-[200px]
                                    overflow-hidden
                                "
                            >
                                <img
                                    src={item.musicPicture}
                                    alt={item.lessonTitle}
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        flex-col
                                        justify-between
                                        h-full
                                        p-2.5
                                    "
                                >
                                    {/* Favorite */}
                                    <button
                                        onClick={() =>
                                            checkFavoriteId(item.id)
                                        }
                                        aria-label="Save to favorites"
                                        className="
                                            w-fit
                                            rounded-full
                                            p-1.5
                                            bg-darkest-blue-bg
                                            hover:scale-105
                                            duration-200
                                        "
                                    >
                                        <img
                                            src={
                                                saveFavoriteId.includes(
                                                    item.id
                                                )
                                                    ? tick
                                                    : saveToFavoriteIcon
                                            }
                                            width={24}
                                            height={24}
                                            alt=""
                                        />
                                    </button>

                                    {/* Bottom */}
                                    <div
                                        className="
                                            flex
                                            items-end
                                            justify-between
                                            gap-3
                                        "
                                    >
                                        <button
                                            aria-label="Play lesson"
                                            className="
                                                shrink-0
                                                bg-green-bg
                                                rounded-full
                                                p-2
                                                hover:scale-110
                                                duration-200
                                            "
                                        >
                                            <img
                                                src={playMusic}
                                                className="w-[36px] sm:w-[40px]"
                                                alt=""
                                            />
                                        </button>

                                        <p
                                            className="
                                                bg-darkest-blue-bg
                                                rounded-md
                                                px-2
                                                py-1
                                                text-xs
                                                sm:text-sm
                                                text-blue-txt
                                                whitespace-nowrap
                                            "
                                        >
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-3 sm:p-4">
                                <div className="flex flex-col">
                                    {/* Level */}
                                    <p
                                        className={`
                                            ${getLevelStyle(item.level)}
                                            px-3
                                            py-1
                                            rounded-md
                                            w-fit
                                            text-xs
                                            sm:text-sm
                                            text-darkest-blue-txt
                                            font-bold
                                        `}
                                    >
                                        {item.level}
                                    </p>

                                    {/* Title */}
                                    <h2
                                        className="
                                            mt-3
                                            text-base
                                            sm:text-lg
                                            font-semibold
                                            leading-6
                                            line-clamp-2
                                            min-h-[48px]
                                        "
                                    >
                                        {item.lessonTitle}
                                    </h2>

                                    {/* Teacher */}
                                    <Link
                                        to="#"
                                        className="
                                            mt-1
                                            text-sm
                                            text-muted-text
                                            hover:text-blue-txt
                                            truncate
                                            w-fit
                                        "
                                    >
                                        {item.teacher}
                                    </Link>
                                </div>

                                {/* Meta */}
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        mt-4
                                        text-xs
                                        sm:text-sm
                                        text-muted-text
                                    "
                                >
                                    <div className="flex items-center gap-2 min-w-0">
                                        <p className="truncate">
                                            {item.time}
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            shrink-0
                                        "
                                    >
                                        <img
                                            src={fileIcon}
                                            width={14}
                                            height={14}
                                            alt=""
                                        />

                                        <p>{item.Files}</p>
                                    </div>
                                </div>

                                {/* Price */}
                                <button
                                    className="
                                        mt-4
                                        rounded-[10px]
                                        border
                                        border-neutralGreen-br
                                        px-3
                                        sm:px-4
                                        py-2

                                        w-fit
                                        max-w-full

                                        text-xs
                                        sm:text-sm
                                        text-tiffany-txt
                                        font-bold

                                        hover:bg-tiffany-bg
                                        hover:text-darkest-blue-txt
                                        duration-200
                                    "
                                >
                                    <p className="truncate">
                                        {item.priceNumber}
                                    </p>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default LessonsSection

