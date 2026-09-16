import { useState } from "react";
import defaultBackground from '../assets/CorePicture.webp'

const currentUser = {
    name: "Ali Ghanad",
    username: "ali_ghanad",

    role: "Musician & Producer",

    bio: "Musician, producer and music lover. Creating sounds, discovering artists and sharing the beauty of music.",

    location: "Tehran, Iran",

    joined: "March 2024",

    followers: 12400,
    following: 284,

    tracks: 36,
    playlists: 18,

    instruments: [
        "Guitar",
        "Piano",
        "Drums",
    ],

    genres: [
        "Rock",
        "Jazz",
        "Classical",
        "Electronic",
        "Alternative",
    ],

    socials: {
        instagram: "@ali_ghanad",
        telegram: "@ali_ghanad",
        soundcloud: "ali-ghanad",
    },
};

const myTracks = [
    {
        id: 1,
        title: "Midnight Rain",
        genre: "Alternative",
        duration: "03:42",
        plays: "12.4K",
        likes: "1.2K",
        cover:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
    },

    {
        id: 2,
        title: "Echoes",
        genre: "Rock",
        duration: "04:18",
        plays: "8.7K",
        likes: "842",
        cover:
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=80",
    },

    {
        id: 3,
        title: "After Dark",
        genre: "Jazz",
        duration: "03:51",
        plays: "6.3K",
        likes: "621",
        cover:
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
    },
];

const myPlaylists = [
    {
        id: 1,
        title: "Late Night Vibes",
        tracks: 24,
        cover:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
    },

    {
        id: 2,
        title: "My Favorite Rock",
        tracks: 31,
        cover:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
    },

    {
        id: 3,
        title: "Chill & Focus",
        tracks: 18,
        cover:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    },
];

function formatNumber(number) {
    if (number >= 1000) {
        return `${(number / 1000).toFixed(number >= 10000 ? 0 : 1)}K`;
    }

    return number;
}

function PlayIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
        >
            <path d="M8 5v14l11-7L8 5Z" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-4 h-4"
        >
            <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-4 h-4"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-4 h-4"
        >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-5 h-5"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
            />
        </svg>
    );
}

function TelegramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
        >
            <path d="M21.5 4.2 18.3 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.7 13.9.8 12.4c-1.1-.3-1.1-1.1.2-1.6L20 3.3c.9-.3 1.7.2 1.5.9Z" />
        </svg>
    );
}

export default function MyProfile() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        {
            id: "overview",
            label: "Overview",
        },
        {
            id: "tracks",
            label: "My Tracks",
        },
        {
            id: "playlists",
            label: "My Playlists",
        },
        {
            id: "liked",
            label: "Liked",
        },
        {
            id: "lessons",
            label: "My Lessons",
        },
        {
            id: "activity",
            label: "Activity",
        },
    ];

    return (
        <main className="min-h-screen bg-[var(--color-darkest-blue-bg)] text-white pb-20">
            {/*COVER*/}

            <section className="relative">
                <div className="h-56 md:h-80 overflow-hidden">
                    <img
                        src={defaultBackground}
                        alt="Profile cover"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[var(--color-darkest-blue-bg)]" />
                </div>

                {/*PROFILE HEADER*/}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-28 relative">
                    <div className="flex flex-col md:flex-row md:items-end gap-5">
                        {/* Avatar */}

                        <div className="relative shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-[var(--color-tiffany-bg)]">
                                <img
                                    src={defaultBackground}
                                    alt={currentUser.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-[var(--color-darkest-blue-bg)]"
                                />
                            </div>
                        </div>

                        {/* User information */}

                        <div className="flex-1 pb-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="!text-3xl md:!text-4xl font-bold">
                                    {currentUser.name}
                                </h1>

                                <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-green-bg)] text-[var(--color-tiffany-txt)] border border-[var(--color-neutralGreen-br)]">
                                    {currentUser.role}
                                </span>
                            </div>

                            <p className="text-[var(--color-muted-text)] mt-1">
                                @{currentUser.username}
                            </p>
                        </div>

                        {/* Edit */}

                        <div className="pb-1">
                            <button
                                className="
                                px-6
                                py-2.5
                                rounded-xl
                                bg-[var(--color-tiffany-bg)]
                                text-[var(--color-darkest-blue-bg)]
                                font-semibold
                                hover:opacity-90
                                "
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Bio */}

                    <div className="max-w-3xl mt-5">
                        <p className="text-[var(--color-muted-text)] leading-7">
                            {currentUser.bio}
                        </p>
                    </div>
                </div>
            </section>

            {/*STATS*/}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Stat
                        value={formatNumber(currentUser.followers)}
                        label="Followers"
                    />

                    <Stat
                        value={formatNumber(currentUser.following)}
                        label="Following"
                    />

                    <Stat
                        value={currentUser.tracks}
                        label="Tracks"
                    />

                    <Stat
                        value={currentUser.playlists}
                        label="Playlists"
                    />
                </div>
            </section>

            {/*TABS*/}

            <section className="sticky top-0 z-30 mt-8 bg-[var(--color-darkest-blue-bg)]/95 backdrop-blur-md border-y border-[var(--color-DarkGreen-br)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
                    <div className="flex min-w-max">
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                    px-5
                                    py-4
                                    text-sm
                                    font-medium
                                    border-b-2
                                    transition
                                    ${activeTab === tab.id
                                            ? "text-[var(--color-tiffany-txt)] border-[var(--color-tiffany-bg)]"
                                            : "text-[var(--color-muted-text)] border-transparent hover:text-white"
                                        }
                                    `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                    </div>
                </div>
            </section>

            {/*CONTENT*/}

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                {activeTab === "overview" && (
                    <Overview />
                )}

                {activeTab === "tracks" && (
                    <Tracks tracks={myTracks} />
                )}

                {activeTab === "playlists" && (
                    <Playlists playlists={myPlaylists} />
                )}

                {activeTab === "liked" && (
                    <EmptyState
                        title="Your liked tracks"
                        description="Tracks that you have liked will appear here."
                    />
                )}

                {activeTab === "lessons" && (
                    <EmptyState
                        title="Your lessons"
                        description="Your saved and purchased lessons will appear here."
                    />
                )}

                {activeTab === "activity" && (
                    <EmptyState
                        title="Your activity"
                        description="Your recent activity on Pezhvak will appear here."
                    />
                )}
            </section>
        </main>
    );
}

/*OVERVIEW */

function Overview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}

            <div className="lg:col-span-2 space-y-6">
                {/* My Tracks */}

                <div className="profile-card">
                    <SectionHeader
                        title="Recently Uploaded"
                        action="View all"
                    />

                    <div className="space-y-2">
                        {myTracks.map((track, index) => (
                            <TrackRow
                                key={track.id}
                                track={track}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Playlists */}

                <div className="profile-card">
                    <SectionHeader
                        title="My Playlists"
                        action="View all"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {myPlaylists.map((playlist) => (
                            <PlaylistCard
                                key={playlist.id}
                                playlist={playlist}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-6">
                {/* About */}

                <div className="profile-card">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="!text-xl font-semibold">
                            About Me
                        </h2>

                        <button className="text-sm text-[var(--color-blue-txt)]">
                            Edit
                        </button>
                    </div>

                    <div className="space-y-4">
                        <InfoRow
                            icon={<MapPinIcon />}
                            text={currentUser.location}
                        />

                        <InfoRow
                            icon={<CalendarIcon />}
                            text={`Joined ${currentUser.joined}`}
                        />
                    </div>
                </div>

                {/* Instruments */}

                <div className="profile-card">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="!text-xl font-semibold">
                            Instruments
                        </h2>

                        <button className="text-sm text-[var(--color-blue-txt)]">
                            Edit
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {currentUser.instruments.map(
                            (instrument) => (
                                <span
                                    key={instrument}
                                    className="
                    px-3
                    py-1.5
                    rounded-lg
                    bg-[var(--color-green-bg)]
                    text-[var(--color-tiffany-txt)]
                    text-sm
                  "
                                >
                                    {instrument}
                                </span>
                            )
                        )}
                    </div>
                </div>

                {/* Genres */}

                <div className="profile-card">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="!text-xl font-semibold">
                            Favorite Genres
                        </h2>

                        <button className="text-sm text-[var(--color-blue-txt)]">
                            Edit
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {currentUser.genres.map((genre) => (
                            <span
                                key={genre}
                                className="
                  px-3
                  py-1.5
                  rounded-lg
                  bg-[var(--color-darkblueLowVolume-bg)]
                  border
                  border-[var(--color-DarkGreen-br)]
                  text-sm
                  text-[var(--color-muted-text)]
                "
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Social */}

                <div className="profile-card">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="!text-xl font-semibold">
                            Social Links
                        </h2>

                        <button className="text-sm text-[var(--color-blue-txt)]">
                            Edit
                        </button>
                    </div>

                    <div className="space-y-3">
                        <SocialLink
                            icon={<InstagramIcon />}
                            text={currentUser.socials.instagram}
                        />

                        <SocialLink
                            icon={<TelegramIcon />}
                            text={currentUser.socials.telegram}
                        />

                        <SocialLink
                            icon={<PlayIcon />}
                            text={currentUser.socials.soundcloud}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/*TRACKS*/

function Tracks({ tracks }) {
    return (
        <div className="profile-card">
            <SectionHeader
                title="My Tracks"
                action="+ Upload Track"
            />

            <div className="space-y-2">
                {tracks.map((track, index) => (
                    <TrackRow
                        key={track.id}
                        track={track}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

/*PLAYLISTS*/

function Playlists({ playlists }) {
    return (
        <div className="profile-card">
            <SectionHeader
                title="My Playlists"
                action="+ Create Playlist"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {playlists.map((playlist) => (
                    <PlaylistCard
                        key={playlist.id}
                        playlist={playlist}
                    />
                ))}
            </div>
        </div>
    );
}

/*TRACK ROW*/

function TrackRow({ track, index }) {
    return (
        <div
            className="
        group
        flex
        items-center
        gap-4
        p-3
        rounded-xl
        hover:bg-[var(--color-darkblueLowVolume-bg)]
        transition
      "
        >
            <div className="w-7 text-center text-sm text-[var(--color-muted-text)]">
                <span className="group-hover:hidden">
                    {index + 1}
                </span>

                <span className="hidden group-hover:inline-flex text-[var(--color-tiffany-txt)]">
                    <PlayIcon />
                </span>
            </div>

            <img
                src={defaultBackground}
                alt={track.title}
                className="w-12 h-12 rounded-lg object-cover"
            />

            <div className="flex-1 min-w-0">
                <h3 className="!text-base font-medium truncate">
                    {track.title}
                </h3>

                <p className="text-xs text-[var(--color-muted-text)]">
                    {track.genre}
                </p>
            </div>

            <div className="hidden sm:block text-sm text-[var(--color-muted-text)]">
                {track.plays}
            </div>

            <div className="hidden sm:flex items-center gap-1 text-sm text-[var(--color-muted-text)]">
                <HeartIcon />
                {track.likes}
            </div>

            <div className="text-sm text-[var(--color-muted-text)]">
                {track.duration}
            </div>
        </div>
    );
}

/*PLAYLIST CARD*/

function PlaylistCard({ playlist }) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-square rounded-xl overflow-hidden">
                <img
                    src={defaultBackground}
                    alt={playlist.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                    "
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                <button
                    className="
                    absolute
                    right-3
                    bottom-3
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--color-tiffany-bg)]
                    text-[var(--color-darkest-blue-bg)]
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                >
                    <PlayIcon />
                </button>
            </div>

            <h3 className="!text-base font-medium mt-3 truncate">
                {playlist.title}
            </h3>

            <p className="text-sm text-[var(--color-muted-text)]">
                {playlist.tracks} tracks
            </p>
        </div>
    );
}

/*SECTION HEADER*/

function SectionHeader({ title, action }) {
    return (
        <div className="flex items-center justify-between mb-5">
            <h2 className="!text-xl font-semibold">
                {title}
            </h2>

            {action && (
                <button className="text-sm text-[var(--color-blue-txt)] hover:text-[var(--color-tiffany-txt)]">
                    {action}
                </button>
            )}
        </div>
    );
}

/*INFO*/

function InfoRow({ icon, text }) {
    return (
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted-text)]">
            <span className="text-[var(--color-tiffany-txt)]">
                {icon}
            </span>

            {text}
        </div>
    );
}

/*SOCIAL*/

function SocialLink({ icon, text }) {
    return (
        <button className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--color-darkblueLowVolume-bg)] text-[var(--color-muted-text)] hover:text-[var(--color-tiffany-txt)] transition">
            {icon}

            <span className="text-sm">
                {text}
            </span>
        </button>
    );
}

/*STAT */

function Stat({ value, label }) {
    return (
        <div className="rounded-2xl bg-[var(--color-darkblueLowVolume-bg)] border border-[var(--color-DarkGreen-br)] px-5 py-5 text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-tiffany-txt)]">
                {value}
            </div>

            <div className="text-sm text-[var(--color-muted-text)] mt-1">
                {label}
            </div>
        </div>
    );
}

/*EMPTY STATE*/

function EmptyState({ title, description }) {
    return (
        <div className="profile-card min-h-[350px] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-green-bg)] text-[var(--color-tiffany-txt)] flex items-center justify-center mb-5">
                <PlayIcon />
            </div>

            <h2 className="!text-xl font-semibold">
                {title}
            </h2>

            <p className="text-[var(--color-muted-text)] mt-2 max-w-md">
                {description}
            </p>
        </div>
    );
}