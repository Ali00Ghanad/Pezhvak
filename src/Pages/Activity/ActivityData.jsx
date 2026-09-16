import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const activitiesData = [
    {
        id: 1,
        type: "comment",
        title: "You commented on a lesson",
        description: "This rhythm exercise helped me a lot!",
        target: "Beginner Rhythm Exercise",
        date: "2 hours ago",
    },
    {
        id: 2,
        type: "like",
        title: "You liked a music",
        description: "Midnight Guitar",
        target: "Midnight Guitar",
        date: "5 hours ago",
    },
    {
        id: 3,
        type: "lesson",
        title: "You uploaded a lesson",
        description: "Learn the basics of Fingerstyle Guitar",
        target: "Fingerstyle Guitar - Basics",
        date: "Yesterday",
    },
    {
        id: 4,
        type: "music",
        title: "You uploaded a music",
        description: "A short acoustic guitar composition",
        target: "Rainy Evening",
        date: "Yesterday",
    },
    {
        id: 5,
        type: "like",
        title: "You liked a lesson",
        description: "Introduction to Persian Music",
        target: "Introduction to Persian Music",
        date: "2 days ago",
    },
    {
        id: 6,
        type: "comment",
        title: "You commented on a music",
        description: "Beautiful melody!",
        target: "Persian Sunset",
        date: "3 days ago",
    },
    {
        id: 7,
        type: "music",
        title: "You uploaded a music",
        description: "Another acoustic experiment",
        target: "Acoustic Dreams",
        date: "4 days ago",
    },
    {
        id: 8,
        type: "lesson",
        title: "You uploaded a lesson",
        description: "Basic Chord Progressions",
        target: "Guitar Chord Progressions",
        date: "5 days ago",
    },
];

const filters = [
    {
        id: "all",
        label: "All Activities",
    },
    {
        id: "comment",
        label: "Comments",
    },
    {
        id: "like",
        label: "Likes",
    },
    {
        id: "lesson",
        label: "Lessons",
    },
    {
        id: "music",
        label: "Music",
    },
];

const activityInfo = {
    comment: {
        label: "Comment",
        icon: "💬",
    },
    like: {
        label: "Like",
        icon: "♥",
    },
    lesson: {
        label: "Lesson",
        icon: "🎓",
    },
    music: {
        label: "Music",
        icon: "♫",
    },
};

const graphData = [
    {
        day: "Sat",
        value: 2,
    },
    {
        day: "Sun",
        value: 4,
    },
    {
        day: "Mon",
        value: 3,
    },
    {
        day: "Tue",
        value: 6,
    },
    {
        day: "Wed",
        value: 5,
    },
    {
        day: "Thu",
        value: 8,
    },
    {
        day: "Fri",
        value: 7,
    },
];

const ActivityData = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredActivities = useMemo(() => {
        if (activeFilter === "all") {
            return activitiesData;
        }

        return activitiesData.filter(
            (activity) => activity.type === activeFilter
        );
    }, [activeFilter]);

    const stats = {
        total: activitiesData.length,

        comments: activitiesData.filter(
            (activity) => activity.type === "comment"
        ).length,

        likes: activitiesData.filter(
            (activity) => activity.type === "like"
        ).length,

        lessons: activitiesData.filter(
            (activity) => activity.type === "lesson"
        ).length,

        music: activitiesData.filter(
            (activity) => activity.type === "music"
        ).length,
    };

    return (
        <main className="min-h-screen bg-darkest-blue-bg px-4 py-10 text-white sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* =========================
                    HEADER
                ========================== */}

                <div className="mb-10">
                    <div>
                        <h1 className="text-3xl font-bold sm:text-4xl">
                            Activities
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-text sm:text-base">
                            Keep track of everything you've been doing on
                            Pezhvak.
                        </p>
                    </div>

                </div>


                {/* =========================
                    STAT CARDS
                ========================== */}

                <section data-aos='fade-up' className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-5">

                    {/* Total */}
                    <div className="rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-6 lg:col-span-1">

                        <p className="text-sm text-muted-text">
                            Total Activities
                        </p>

                        <p className="mt-3 text-3xl font-bold text-tiffany-txt">
                            {stats.total}
                        </p>

                    </div>


                    {/* Comments */}
                    <div className="rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-6">

                        <div className="flex items-center justify-between">
                            <span className="text-xl">
                                💬
                            </span>

                            <span className="text-2xl font-bold">
                                {stats.comments}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-muted-text">
                            Comments
                        </p>

                    </div>


                    {/* Likes */}
                    <div className="rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-6">

                        <div className="flex items-center justify-between">
                            <span className="text-xl">
                                ♥
                            </span>

                            <span className="text-2xl font-bold">
                                {stats.likes}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-muted-text">
                            Likes
                        </p>

                    </div>


                    {/* Lessons */}
                    <div className="rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-6">

                        <div className="flex items-center justify-between">
                            <span className="text-xl">
                                🎓
                            </span>

                            <span className="text-2xl font-bold">
                                {stats.lessons}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-muted-text">
                            Lessons
                        </p>

                    </div>


                    {/* Music */}
                    <div className="rounded-2xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-6">

                        <div className="flex items-center justify-between">
                            <span className="text-xl">
                                ♫
                            </span>

                            <span className="text-2xl font-bold">
                                {stats.music}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-muted-text">
                            Music Uploads
                        </p>

                    </div>

                </section>


                {/* =========================
                    ACTIVITY GRAPH
                ========================== */}

                <section data-aos='fade-up' className="mb-10 rounded-3xl border border-DarkGreen-br bg-darkblueLowVolume-bg p-5 sm:p-7">

                    <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                        <div>
                            <h2 className="text-xl font-bold sm:text-2xl">
                                Activity Overview
                            </h2>

                            <p className="mt-2 text-sm text-muted-text">
                                Your activity during the last 7 days.
                            </p>
                        </div>

                        <div className="rounded-lg bg-green-bg px-3 py-2 text-xs text-white/70">
                            Last 7 days
                        </div>

                    </div>


                    {/* Graph */}

                    <div className="relative">

                        {/* Horizontal lines */}
                        <div className="absolute inset-x-0 top-0 flex h-52 flex-col justify-between">

                            <div className="border-t border-white/5" />
                            <div className="border-t border-white/5" />
                            <div className="border-t border-white/5" />
                            <div className="border-t border-white/5" />
                            <div className="border-t border-white/5" />

                        </div>


                        {/* Bars */}

                        <div className="relative flex h-52 items-end justify-between gap-3 px-2">

                            {graphData.map((item) => (

                                <div
                                    key={item.day}
                                    className="flex h-full flex-1 flex-col items-center justify-end"
                                >

                                    <div className="mb-2 text-xs text-muted-text">
                                        {item.value}
                                    </div>

                                    <div
                                        className="w-full max-w-12 rounded-t-lg bg-tiffany-bg transition-all duration-300 hover:bg-blue-txt"
                                        style={{
                                            height: `${item.value * 10}%`,
                                        }}
                                    />

                                </div>

                            ))}

                        </div>


                        {/* Days */}

                        <div className="mt-4 flex justify-between gap-3 px-2">

                            {graphData.map((item) => (

                                <div
                                    key={item.day}
                                    className="flex-1 text-center text-xs text-muted-text"
                                >
                                    {item.day}
                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =========================
                    ACTIVITIES
                ========================== */}

                <section data-aos='fade-up'>

                    <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                        <div>
                            <h2 className="text-2xl font-bold">
                                Your Activities
                            </h2>

                            <p className="mt-2 text-sm text-muted-text">
                                Everything you've done recently.
                            </p>
                        </div>


                        {/* Filters */}

                        <div className="flex flex-wrap gap-2">

                            {filters.map((filter) => (

                                <button
                                    key={filter.id}
                                    type="button"
                                    onClick={() =>
                                        setActiveFilter(filter.id)
                                    }
                                    className={`rounded-lg px-3 py-2 text-xs font-medium transition sm:text-sm ${activeFilter === filter.id
                                            ? "bg-tiffany-bg text-darkest-blue-bg"
                                            : "border border-DarkGreen-br bg-darkblueLowVolume-bg text-muted-text hover:text-white"
                                        }`}
                                >
                                    {filter.label}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Activity List */}

                    <div className="overflow-hidden rounded-3xl border border-DarkGreen-br bg-darkblueLowVolume-bg">

                        {filteredActivities.length === 0 ? (

                            <div className="px-6 py-16 text-center">

                                <div className="mb-4 text-4xl">
                                    ♪
                                </div>

                                <h3 className="text-lg font-semibold">
                                    No activities yet
                                </h3>

                                <p className="mt-2 text-sm text-muted-text">
                                    Your activities will appear here.
                                </p>

                            </div>

                        ) : (

                            <div className="divide-y divide-DarkGreen-br">

                                {filteredActivities.map((activity) => {

                                    const info =
                                        activityInfo[activity.type];

                                    return (

                                        <div
                                            key={activity.id}
                                            className="group flex gap-4 px-5 py-5 transition hover:bg-green-bg/30 sm:px-6"
                                        >

                                            {/* Icon */}

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-bg text-lg">

                                                {info.icon}

                                            </div>


                                            {/* Content */}

                                            <div className="min-w-0 flex-1">

                                                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">

                                                    <h3 className="font-semibold text-white">
                                                        {activity.title}
                                                    </h3>

                                                    <span className="shrink-0 text-xs text-muted-text">
                                                        {activity.date}
                                                    </span>

                                                </div>

                                                <p className="mt-1 text-sm text-muted-text">
                                                    {activity.description}
                                                </p>

                                                <p className="mt-2 text-xs text-tiffany-txt">
                                                    {activity.target}
                                                </p>

                                            </div>

                                        </div>

                                    );
                                })}

                            </div>

                        )}

                    </div>

                </section>

            </div>

        </main>
    );
};

export default ActivityData;