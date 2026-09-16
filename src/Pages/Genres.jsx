import { Link } from "react-router-dom"

const genres = [
    "Classical",
    "Jazz",
    "Rock",
    "Pop",
    "Blues",
    "Metal",
    "Hip Hop",
    "R&B",
    "Electronic",
    "Folk",
    "Country",
    "Reggae",
    "Soul",
    "Funk",
    "Gospel",
    "Indie",
    "Alternative",
    "Punk",
    "Ambient",
    "Lo-fi",
    "Acoustic",
    "World Music",
    "Latin",
    "Soundtrack",
    "Experimental",
    "Progressive",
    "Blues Rock",
    "Hard Rock",
    "Heavy Metal",
    "Post Rock",
    "Neo Soul",
    "Synthwave",
    "House",
    "Techno",
    "Trance",
    "Drum & Bass",
]

const Genres = () => {
    return (
        <main className="w-full">
            {/* Hero */}
            <section className="w-full border-b border-DarkGreen-br">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 py-20 text-center sm:py-24 lg:py-28">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-txt">
                        Explore Music
                    </span>

                    <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
                        Explore by Genre
                    </h1>

                    <p className="max-w-2xl text-base leading-7 text-muted-text sm:text-lg">
                        Discover music, artists, and lessons through the genres
                        you love.
                    </p>
                </div>
            </section>

            {/* Genres */}
            <section className="w-full">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 py-16 sm:py-20">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="mb-2">All Genres</h2>
                            <p className="text-muted-text">
                                Choose a genre to start exploring.
                            </p>
                        </div>

                        <span className="hidden text-sm text-dark-tiffany-txt sm:block">
                            {genres.length} genres
                        </span>
                    </div>

                    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {genres.map((genre) => (
                            <Link
                                key={genre}
                                to={`/genres/${genre.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                                className="group flex min-h-32 w-full items-end rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutralGreen-br hover:bg-green-bg"
                            >
                                <div className="flex w-full items-center justify-between gap-3">
                                    <h3 className="text-base font-semibold transition-colors group-hover:text-tiffany-txt sm:text-lg">
                                        {genre}
                                    </h3>

                                    <span className="text-lg text-dark-tiffany-txt transition-transform duration-300 group-hover:translate-x-1 group-hover:text-tiffany-txt">
                                        →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full border-t border-DarkGreen-br">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 py-20 text-center">
                    <h2>Can’t find your genre?</h2>

                    <p className="max-w-xl text-muted-text">
                        Explore the full music library and discover artists,
                        tracks, and lessons from across Pezhvak.
                    </p>

                    <Link
                        to="/explore"
                        className="rounded-xl bg-blue-txt px-6 py-3 font-semibold text-darkest-blue-bg transition-all duration-300 hover:bg-tiffany-bg"
                    >
                        Explore Pezhvak
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Genres