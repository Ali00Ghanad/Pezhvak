import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UploadLesson = () => {
    const [video, setVideo] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        instrument: '',
        category: '',
        level: '',
        language: 'English',
        price: '',
        isFree: true,
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleVideoChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setVideo(file)
        }
    }

    const handleThumbnailChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setThumbnail(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const lesson = {
            ...formData,
            video,
            thumbnail,
        }

        console.log('Lesson:', lesson)

        // TODO:
        // Upload video
        // Upload thumbnail
        // Send lesson data to backend
    }

    return (
        <div className="w-full max-w-6xl mx-auto pb-16">

            {/* Header */}
            <div className="mb-8">

                <h1 className="font-bold">
                    Upload a Lesson
                </h1>

                <p className="text-muted-text mt-2">
                    Share your knowledge and teach music to the Pezhvak community.
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >

                {/* Basic Information */}
                <section
                    className="
                        bg-darkblueLowVolume-bg
                        border border-DarkGreen-br
                        rounded-2xl
                        p-6
                        md:p-8
                    "
                >

                    <div className="mb-6">
                        <h2 className="text-xl font-bold">
                            Lesson Information
                        </h2>

                        <p className="text-sm text-muted-text mt-1">
                            Tell students what they will learn in this lesson.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">

                        {/* Title */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Lesson title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Learn the basics of guitar"
                                required
                                className="
                                    w-full
                                    bg-darkest-blue-bg
                                    border border-DarkGreen-br
                                    rounded-xl
                                    px-4 py-3
                                    text-white
                                    placeholder:text-muted-text
                                    outline-none
                                    focus:border-blue-txt
                                    transition
                                "
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm text-white mb-2">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Explain what students will learn..."
                                rows={6}
                                required
                                className="
                                    w-full
                                    resize-none
                                    bg-darkest-blue-bg
                                    border border-DarkGreen-br
                                    rounded-xl
                                    px-4 py-3
                                    text-white
                                    placeholder:text-muted-text
                                    outline-none
                                    focus:border-blue-txt
                                    transition
                                "
                            />
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">

                            {/* Instrument */}
                            <div>
                                <label className="block text-sm text-white mb-2">
                                    Instrument
                                </label>

                                <select
                                    name="instrument"
                                    value={formData.instrument}
                                    onChange={handleChange}
                                    required
                                    className="
                                        w-full
                                        bg-darkest-blue-bg
                                        border border-DarkGreen-br
                                        rounded-xl
                                        px-4 py-3
                                        text-white
                                        outline-none
                                        focus:border-blue-txt
                                    "
                                >
                                    <option value="">
                                        Select instrument
                                    </option>

                                    <option value="guitar">
                                        Guitar
                                    </option>

                                    <option value="piano">
                                        Piano
                                    </option>

                                    <option value="violin">
                                        Violin
                                    </option>

                                    <option value="drums">
                                        Drums
                                    </option>

                                    <option value="vocals">
                                        Vocals
                                    </option>

                                    <option value="bass">
                                        Bass
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm text-white mb-2">
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="
                                        w-full
                                        bg-darkest-blue-bg
                                        border border-DarkGreen-br
                                        rounded-xl
                                        px-4 py-3
                                        text-white
                                        outline-none
                                        focus:border-blue-txt
                                    "
                                >
                                    <option value="">
                                        Select category
                                    </option>

                                    <option value="theory">
                                        Music Theory
                                    </option>

                                    <option value="technique">
                                        Technique
                                    </option>

                                    <option value="song">
                                        Learn a Song
                                    </option>

                                    <option value="production">
                                        Music Production
                                    </option>

                                    <option value="composition">
                                        Composition
                                    </option>
                                </select>
                            </div>

                            {/* Level */}
                            <div className='col-span-2'>
                                <label className="block text-sm text-white mb-2">
                                    Level
                                </label>

                                <select
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    required
                                    className="
                                        w-full
                                        bg-darkest-blue-bg
                                        border border-DarkGreen-br
                                        rounded-xl
                                        px-4 py-3
                                        text-white
                                        outline-none
                                        focus:border-blue-txt
                                    "
                                >
                                    <option value="">
                                        Select level
                                    </option>

                                    <option value="beginner">
                                        Beginner
                                    </option>

                                    <option value="intermediate">
                                        Intermediate
                                    </option>

                                    <option value="advanced">
                                        Advanced
                                    </option>
                                </select>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Video */}
                <section
                    className="
                        bg-darkblueLowVolume-bg
                        border border-DarkGreen-br
                        rounded-2xl
                        p-6
                        md:p-8
                    "
                >

                    <div className="mb-6">
                        <h2 className="text-xl font-bold">
                            Lesson Video
                        </h2>

                        <p className="text-sm text-muted-text mt-1">
                            Upload the main video students will watch.
                        </p>
                    </div>

                    <label
                        htmlFor="lesson-video"
                        className="
                            block
                            cursor-pointer
                            border-2
                            border-dashed
                            border-DarkGreen-br
                            hover:border-blue-txt
                            rounded-2xl
                            p-10
                            text-center
                            transition
                        "
                    >

                        <input
                            id="lesson-video"
                            type="file"
                            accept="video/*"
                            onChange={handleVideoChange}
                            className="hidden"
                        />

                        <div className="text-4xl mb-4">
                            🎬
                        </div>

                        {video ? (
                            <>
                                <p className="text-white font-medium">
                                    {video.name}
                                </p>

                                <p className="text-muted-text text-sm mt-2">
                                    {(video.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-white font-medium">
                                    Click to upload your lesson
                                </p>

                                <p className="text-muted-text text-sm mt-2">
                                    MP4, WebM or MOV
                                </p>
                            </>
                        )}

                    </label>
                </section>

                {/* Thumbnail */}
                <section
                    className="
                        bg-darkblueLowVolume-bg
                        border border-DarkGreen-br
                        rounded-2xl
                        p-6
                        md:p-8
                    "
                >

                    <div className="mb-6">
                        <h2 className="text-xl font-bold">
                            Lesson Thumbnail
                        </h2>

                        <p className="text-sm text-muted-text mt-1">
                            Add an attractive cover for your lesson.
                        </p>
                    </div>

                    <label
                        htmlFor="lesson-thumbnail"
                        className="
                            block
                            cursor-pointer
                            border-2
                            border-dashed
                            border-DarkGreen-br
                            hover:border-blue-txt
                            rounded-2xl
                            overflow-hidden
                            transition
                        "
                    >

                        <input
                            id="lesson-thumbnail"
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="hidden"
                        />

                        {thumbnail ? (
                            <div className="relative aspect-video">

                                <img
                                    src={URL.createObjectURL(thumbnail)}
                                    alt="Lesson thumbnail"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-black/30
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <span className="bg-darkest-blue-bg/80 px-4 py-2 rounded-lg text-sm">
                                        Change thumbnail
                                    </span>
                                </div>

                            </div>
                        ) : (
                            <div className="p-10 text-center">

                                <div className="text-4xl mb-4">
                                    🖼️
                                </div>

                                <p className="text-white font-medium">
                                    Upload a thumbnail
                                </p>

                                <p className="text-muted-text text-sm mt-2">
                                    Recommended: 1280 × 720
                                </p>

                            </div>
                        )}

                    </label>
                </section>

                {/* Pricing */}
                <section
                    className="
                        bg-darkblueLowVolume-bg
                        border border-DarkGreen-br
                        rounded-2xl
                        p-6
                        md:p-8
                    "
                >

                    <div className="mb-6">
                        <h2 className="text-xl font-bold">
                            Pricing
                        </h2>

                        <p className="text-sm text-muted-text mt-1">
                            Choose how students can access your lesson.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">

                        {/* Free */}
                        <label
                            className={`
                                flex
                                items-center
                                justify-between
                                gap-4
                                p-4
                                rounded-xl
                                border
                                cursor-pointer
                                transition
                                ${formData.isFree
                                    ? 'border-blue-txt bg-green-bg/20'
                                    : 'border-DarkGreen-br bg-darkest-blue-bg'
                                }
                            `}
                        >

                            <div>
                                <p className="text-white font-medium">
                                    Free lesson
                                </p>

                                <p className="text-muted-text text-sm mt-1">
                                    Anyone can watch this lesson.
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="pricing"
                                checked={formData.isFree}
                                onChange={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        isFree: true,
                                        price: '',
                                    }))
                                }
                            />

                        </label>

                        {/* Paid */}
                        <label
                            className={`
                                flex
                                items-center
                                justify-between
                                gap-4
                                p-4
                                rounded-xl
                                border
                                cursor-pointer
                                transition
                                ${!formData.isFree
                                    ? 'border-blue-txt bg-green-bg/20'
                                    : 'border-DarkGreen-br bg-darkest-blue-bg'
                                }
                            `}
                        >

                            <div>
                                <p className="text-white font-medium">
                                    Paid lesson
                                </p>

                                <p className="text-muted-text text-sm mt-1">
                                    Students pay to access this lesson.
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="pricing"
                                checked={!formData.isFree}
                                onChange={() =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        isFree: false,
                                    }))
                                }
                            />

                        </label>

                        {!formData.isFree && (
                            <div>

                                <label className="block text-sm text-white mb-2">
                                    Price
                                </label>

                                <div className="flex items-center gap-3">

                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="150000"
                                        min="0"
                                        required
                                        className="
                                            flex-1
                                            bg-darkest-blue-bg
                                            border border-DarkGreen-br
                                            rounded-xl
                                            px-4 py-3
                                            text-white
                                            outline-none
                                            focus:border-blue-txt
                                        "
                                    />

                                    <span className="text-muted-text">
                                        Toman
                                    </span>

                                </div>
                            </div>
                        )}

                    </div>
                </section>

                {/* Publish */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        p-5
                        bg-darkblueLowVolume-bg
                        border border-DarkGreen-br
                        rounded-2xl
                        max-sm:flex-col
                        max-sm:items-stretch
                    "
                >

                    <div>
                        <p className="text-white font-medium">
                            Ready to teach?
                        </p>

                        <p className="text-muted-text text-sm mt-1">
                            Your lesson will be submitted for publishing.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="
                            shrink-0
                            px-7
                            py-3
                            rounded-xl
                            bg-tiffany-bg
                            text-darkest-blue-bg
                            font-semibold
                            hover:bg-blue-txt
                            transition
                        "
                    >
                        Publish Lesson
                    </button>

                </div>

            </form>
        </div>
    )
}

export default UploadLesson