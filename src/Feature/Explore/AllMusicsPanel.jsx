import React, { useMemo, useState } from 'react'
import musicPic from '../../assets/CorePicture.webp'
import playMusicIcon from '../../assets/playMusicIcon.svg'
import { OnPlayingMusic } from '../../StoredItems/storeItem'

const AllMusicsPanel = ({ searchQuery = '' }) => {
    const playedMusic = OnPlayingMusic((state) => state.addItem)

    const [genre, setGenre] = useState('All')
    const [type, setType] = useState('All')

    const allSongs = [
        {
            id: '1',
            username: 'Afrooz Vm',
            songName: 'Delbar',
            musicPicture: musicPic,
            genre: 'Pop',
            like: 23,
            price: false,
            priceNumber: 'Free',
            comment: 2,
        },
        {
            id: '2',
            username: 'Ali mx',
            songName: 'Nomad',
            musicPicture: musicPic,
            genre: 'Rock',
            like: 2,
            price: false,
            priceNumber: 'Free',
            comment: 0,
        },
        {
            id: '3',
            username: 'Sara',
            songName: 'Fake and dead',
            musicPicture: musicPic,
            genre: 'Pop',
            like: 210,
            price: true,
            priceNumber: '450,000 T',
            comment: 32,
        },
        {
            id: '4',
            username: 'Negar23',
            songName: 'For you my love',
            musicPicture: musicPic,
            genre: 'Rap',
            like: 11,
            price: false,
            priceNumber: 'Free',
            comment: 2,
        },
        {
            id: '5',
            username: 'Bardia',
            songName: 'Love of my life cover',
            musicPicture: musicPic,
            genre: 'Classic',
            like: 135,
            price: true,
            priceNumber: '12,000 T',
            comment: 1,
        },
        {
            id: '6',
            username: 'Ali575',
            songName: 'Darkside',
            musicPicture: musicPic,
            genre: 'Metal',
            like: 40,
            price: true,
            priceNumber: '20,000 T',
            comment: 23,
        },
        {
            id: '7',
            username: 'Armita',
            songName: 'Evil save us',
            musicPicture: musicPic,
            genre: 'Jazz',
            like: 2,
            price: false,
            priceNumber: 'Free',
            comment: 0,
        },
        {
            id: '8',
            username: 'Mohsen',
            songName: 'تا بینهایت',
            musicPicture: musicPic,
            genre: 'Rock',
            like: 112,
            price: false,
            priceNumber: 'Free',
            comment: 56,
        },
        {
            id: '9',
            username: 'Golnaz',
            songName: 'عشق من | my love but i never wanted this shite in my life',
            musicPicture: musicPic,
            genre: 'Rock',
            like: 45,
            price: true,
            priceNumber: '120,000 T',
            comment: 12,
        },
        {
            id: '10',
            username: 'Farn00sh',
            songName: 'آرزوی من نبود',
            musicPicture: musicPic,
            genre: 'Classic',
            like: 32,
            price: false,
            priceNumber: 'Free',
            comment: 8,
        },
    ]

    const genres = [
        'All',
        'Pop',
        'Rock',
        'Rap',
        'Jazz',
        'Classic',
        'Metal',
    ]

    const filteredSongs = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()

        return allSongs.filter((song) => {
            const matchesSearch =
                !query ||
                song.songName.toLowerCase().includes(query) ||
                song.username.toLowerCase().includes(query) ||
                song.genre.toLowerCase().includes(query)

            const matchesGenre =
                genre === 'All' || song.genre === genre

            const matchesType =
                type === 'All' ||
                (type === 'Free' && !song.price) ||
                (type === 'Paid' && song.price)

            return matchesSearch && matchesGenre && matchesType
        })
    }, [searchQuery, genre, type])

    return (
        <div
            className="
                w-full
                bg-darkblueLowVolume-bg
                border border-DarkGreen-br
                p-6 rounded-2xl
                max-md:p-4
            "
        >
            {/* Header */}
            <div
                className="
                    flex items-center justify-between
                    gap-4 pb-5
                    border-b border-DarkGreen-br
                    max-lg:flex-col max-lg:items-start
                "
            >
                <div>
                    <h2 className="font-bold">
                        All Music
                    </h2>

                    <p className="text-muted-text text-sm mt-1">
                        Discover your next favorite track
                    </p>
                </div>

                {/* Free / Paid */}
                <div
                    className="
                        flex items-center
                        bg-darkest-blue-bg
                        rounded-lg
                        p-1
                        border border-DarkGreen-br
                    "
                >
                    {['All', 'Free', 'Paid'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setType(item)}
                            className={`
                                px-4 py-2 rounded-md text-sm
                                transition
                                ${type === item
                                    ? 'bg-green-bg text-white'
                                    : 'text-muted-text hover:text-white'
                                }
                            `}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Genre Filter */}
            <div
                className="
                    flex gap-2 overflow-x-auto
                    py-5
                    scrollbar-none
                "
            >
                {genres.map((item) => (
                    <button
                        key={item}
                        onClick={() => setGenre(item)}
                        className={`
                            shrink-0
                            px-4 py-2
                            rounded-full
                            text-sm
                            border
                            transition
                            ${genre === item
                                ? 'bg-tiffany-bg text-darkest-blue-bg border-tiffany-bg'
                                : 'bg-darkest-blue-bg text-muted-text border-DarkGreen-br hover:text-white'
                            }
                        `}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Results */}
            {filteredSongs.length > 0 ? (
                <div
                    className="
                        grid grid-cols-5 gap-3
                        max-xl:grid-cols-4
                        max-lg:grid-cols-3
                        max-md:grid-cols-2
                        max-sm:grid-cols-1
                    "
                >
                    {filteredSongs.map((item) => (
                        <div
                            key={item.id}
                            className="
                                bg-darkest-blue-bg
                                rounded-xl
                                overflow-hidden
                                group
                                border border-transparent
                                hover:border-DarkGreen-br
                                transition-all
                            "
                        >
                            {/* Cover */}
                            <div className="w-full  relative overflow-hidden">
                                <img
                                    src={item.musicPicture}
                                    alt={item.songName}
                                    className="
                                        w-full h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-transform duration-500
                                    "
                                />

                                <div
                                    className="
                                        absolute inset-0
                                        bg-black/0
                                        group-hover:bg-black/20
                                        transition
                                    "
                                />

                                <button
                                    onClick={() => playedMusic(item)}
                                    className="
                                        absolute bottom-3 left-3
                                        bg-green-bg
                                        p-2.5
                                        rounded-full
                                        shadow-lg
                                        hover:scale-110
                                        transition
                                    "
                                >
                                    <img
                                        src={playMusicIcon}
                                        width={25}
                                        alt="Play"
                                    />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-3">
                                <div className="flex items-center justify-between gap-2">
                                    <span
                                        className="
                                            w-fit
                                            text-[11px]
                                            bg-DarkGreen-br
                                            text-tiffany-txt
                                            px-2 py-1
                                            rounded
                                        "
                                    >
                                        {item.genre}
                                    </span>

                                    <span className=" text-muted-text flex items-center">

                                        <button>
                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                            </svg>
                                        </button>

                                        {item.like}
                                    </span>
                                </div>

                                <h3
                                    className="
                                        text-base
                                        font-semibold
                                        mt-3
                                        truncate
                                    "
                                >
                                    {item.songName}
                                </h3>

                                <p className="text-muted-text text-sm truncate">
                                    {item.username}
                                </p>

                                {item.price && (
                                    <button
                                        className="
                                            mt-3
                                            border border-neutralGreen-br
                                            px-3 py-1
                                            text-tiffany-txt
                                            rounded-md
                                            text-xs
                                            hover:bg-tiffany-bg
                                            hover:text-darkest-blue-txt
                                            transition
                                        "
                                    >
                                        {item.priceNumber}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center">
                    <div className="text-4xl mb-3">
                        ♪
                    </div>

                    <h3 className="text-xl font-bold">
                        No music found
                    </h3>

                    <p className="text-muted-text text-sm mt-2">
                        Try another search or genre.
                    </p>
                </div>
            )}
        </div>
    )
}

export default AllMusicsPanel