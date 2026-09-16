import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import AtjCard from '../Components/AskToJoinCard'
import TrendingOnExplore from '../Components/TrendingOnExplore'
import ShortCuts from '../Components/ShortCuts'
import AllMusicsPanel from '../Feature/Explore/AllMusicsPanel'

import songLogo from '../assets/noteMusic.svg'

const genres = [
  'Pop',
  'Rock',
  'Rap',
  'Jazz',
  'Classic',
  'Metal',
  'Indie',
  'Acoustic',
]

const Explore = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="w-full flex flex-col gap-6">

      {/* Hero */}
      <section
        className="
        w-full rounded-2xl p-8 md:p-10
        border border-DarkGreen-br
        bg-linear-90 from-darkblueLowVolume-bg to-tiffany-bg/50
        flex justify-between items-center gap-8
        max-lg:flex-col max-lg:items-start
        "
      >
        <div className="flex flex-col gap-5 w-full max-w-2xl">

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-txt" />
            <span className="text-blue-txt text-sm font-medium">
              Discover something new
            </span>
          </div>

          <h1 className="text-[38px] md:text-[48px] leading-[1.05] font-bold">
            Explore the
            <span className="text-blue-txt"> Sound </span>
            of Creativity
          </h1>

          <p className="text-muted-text text-sm md:text-base max-w-lg">
            Discover new music, connect with artists and find
            something that matches your mood.
          </p>

          {/* Search */}
          <div
            className="
            w-full max-w-xl
            flex items-center gap-3
            bg-darkest-blue-bg/80
            border border-DarkGreen-br
            rounded-xl
            px-4 py-3
            focus-within:border-blue-txt
            transition-all
          "
          >
            <svg
              className="w-5 h-5 text-muted-text shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search songs, artists..."
              className="
              w-full bg-transparent outline-none
              text-white placeholder:text-muted-text
              "
            />
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap justify-end gap-2 max-lg:justify-start">

          {genres.slice(0, 5).map((genre) => (
            <button
              key={genre}
              className="
              px-4 py-2 rounded-lg
              bg-darkest-blue-bg/60
              border border-DarkGreen-br
              text-white text-sm
              hover:border-blue-txt
              hover:bg-darkest-blue-bg
              hover:text-blue-txt
              "
            >
              {genre}
            </button>
          ))}

        </div>
      </section>

      {/* Shortcuts */}
      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-bold">Quick Explore</h2>
            <p className="text-muted-text text-sm mt-1">
              Find what you are looking for
            </p>
          </div>
        </div>

        <ShortCuts
          shortcuts={[
            {
              pic: songLogo,
              title: 'Songs',
              paragraph: 'Discover tracks from artists',
            },
            {
              pic: songLogo,
              title: 'Artists',
              paragraph: 'Find and follow amazing artists',
            },
            {
              pic: songLogo,
              title: 'Genres',
              paragraph: 'Browse by your favorite genres',
            },
            {
              pic: songLogo,
              title: 'Playlists',
              paragraph: 'Curated playlists for every mood',
            },
          ]}
        />
      </section>

      {/* Trending */}
      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-bold">Trending Now</h2>
            <p className="text-muted-text text-sm mt-1">
              Music people are listening to right now
            </p>
          </div>
        </div>

        <TrendingOnExplore />
      </section>

      {/* All Music */}
      <section data-aos='fade-up'>
        <AllMusicsPanel searchQuery={search} />
      </section>
          
      {/* CTA */}
      <AtjCard
        title="Find Your People"
        paragraph="Connect with artists who share your passion for music."
        button="Connect Now"
      />

    </div>
  )
}

export default Explore