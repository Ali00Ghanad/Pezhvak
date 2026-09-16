import { useState } from "react";
import { Link } from "react-router-dom";

const ArtistGuide = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqItems = [
        {
            question: "What do I need to become an Artist on Pezhvak?",
            answer:
                "Create your profile, introduce your musical identity, and start sharing your music with the Pezhvak community.",
        },
        {
            question: "How can I upload my music?",
            answer:
                "Use the music upload flow to add your track, provide the required information, choose the relevant genre, and publish your music.",
        },
        {
            question: "What information should I add to my music?",
            answer:
                "Use a clear title and provide useful information such as genre, description, and other available metadata so listeners can better understand your track.",
        },
        {
            question: "Can I share different types of music?",
            answer:
                "Yes. You can share your musical work across the genres and categories supported by Pezhvak.",
        },
        {
            question: "Can I interact with other users?",
            answer:
                "You can use available community features to interact with listeners, musicians, and other members of the Pezhvak community.",
        },
        {
            question: "Can I teach as well as create music?",
            answer:
                "Yes. Pezhvak supports both creative and educational activities. If you want to teach, you can also explore the Teacher experience.",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-darkest-blue-bg)] text-white">
            <section data-aos='fade-up' className="relative overflow-hidden">
                <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-tiffany-bg)]/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex rounded-full border border-[var(--color-neutralGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] px-4 py-2 text-sm text-[var(--color-tiffany-txt)]">
                            Artist Guide
                        </span>

                        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Create. Share. Be Heard.
                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-[var(--color-muted-text)] sm:text-lg">
                            Everything you need to know about becoming an Artist
                            on Pezhvak, sharing your music, connecting with the
                            community, and building your musical journey.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/upload"
                                className="rounded-xl bg-[var(--color-tiffany-bg)] px-6 py-3 font-semibold text-[var(--color-darkest-blue-bg)] transition hover:scale-[1.02]"
                            >
                                Upload Your Music
                            </Link>

                            <a
                                href="#getting-started"
                                className="rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] px-6 py-3 font-semibold text-white transition hover:border-[var(--color-tiffany-bg)]"
                            >
                                Learn How It Works
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos='fade-up' className="border-y border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)]">
                <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                    {[
                        ["getting-started", "Getting Started"],
                        ["profile", "Artist Profile"],
                        ["music", "Upload Music"],
                        ["monetization", "Monetization"],
                        ["explore", "Explore"],
                        ["genres", "Genres"],
                        ["community", "Community"],
                        ["lessons", "Lessons"],
                        ["activities", "Activities"],
                        ["journey", "Journey"],
                        ["faq", "FAQ"],
                    ].map(([id, label]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="whitespace-nowrap rounded-lg border border-[var(--color-DarkGreen-br)] px-4 py-2 text-sm text-[var(--color-muted-text)] transition hover:border-[var(--color-neutralGreen-br)] hover:text-[var(--color-tiffany-txt)]"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-6">

                    <section data-aos='fade-up' id="getting-started" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="01"
                            title="Getting Started as an Artist"
                            description="Start your musical journey on Pezhvak with a clear and simple process."
                        />

                        <div className="grid gap-6 md:grid-cols-3">
                            <GuideCard
                                number="01"
                                title="Build Your Profile"
                                description="Create a clear artist profile so listeners can understand who you are and what kind of music you create."
                            />

                            <GuideCard
                                number="02"
                                title="Upload Your Music"
                                description="Share your tracks with the community and provide the information listeners need to discover your music."
                            />

                            <GuideCard
                                number="03"
                                title="Connect & Grow"
                                description="Interact with the community, explore other artists, and keep building your musical presence."
                            />
                        </div>
                    </section>

                    <section data-aos='fade-up' id="profile" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="02"
                            title="Your Artist Profile"
                            description="Your profile is where listeners discover your identity as an artist."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <InfoPanel title="What to Include">
                                <ul className="space-y-4 text-[var(--color-muted-text)]">
                                    <ListItem>
                                        Your name or artist name
                                    </ListItem>

                                    <ListItem>
                                        A clear and recognizable profile picture
                                    </ListItem>

                                    <ListItem>
                                        A short introduction about your musical identity
                                    </ListItem>

                                    <ListItem>
                                        Your main instruments or musical roles
                                    </ListItem>

                                    <ListItem>
                                        Your musical genres and interests
                                    </ListItem>
                                </ul>
                            </InfoPanel>

                            <InfoPanel title="Make Your Profile Useful">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Help listeners quickly understand who you are,
                                    what you create, and what they can expect from
                                    your music.
                                </p>

                                <div className="mt-6 rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-5">
                                    <p className="text-sm leading-7 text-[var(--color-tiffany-txt)]">
                                        A useful artist profile should answer three questions:
                                    </p>

                                    <div className="mt-4 space-y-3 text-sm text-[var(--color-muted-text)]">
                                        <p>• Who are you?</p>
                                        <p>• What kind of music do you create?</p>
                                        <p>• What should listeners explore first?</p>
                                    </div>
                                </div>
                            </InfoPanel>
                        </div>
                    </section>

                    <section data-aos='fade-up' id="music" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="03"
                            title="Upload Your Music"
                            description="Give your music the information and presentation it needs to be discovered."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            <GuideCard
                                number="01"
                                title="Track Title"
                                description="Choose a clear and recognizable title that represents your track."
                            />

                            <GuideCard
                                number="02"
                                title="Description"
                                description="Tell listeners about the track, its story, inspiration, or anything important about the release."
                            />

                            <GuideCard
                                number="03"
                                title="Genre"
                                description="Choose the genre that best represents your music."
                            />

                            <GuideCard
                                number="04"
                                title="Cover Art"
                                description="Use suitable artwork that gives your track a clear visual identity."
                            />

                            <GuideCard
                                number="05"
                                title="Audio Quality"
                                description="Prepare a clean and properly exported audio file before uploading."
                            />

                            <GuideCard
                                number="06"
                                title="Metadata"
                                description="Complete the available track information so listeners can better understand your music."
                            />
                        </div>
                    </section>

                    <section data-aos='fade-up' id="monetization" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="04"
                            title="Music & Monetization"
                            description="Understand the different ways your music can be presented and potentially monetized on Pezhvak."
                        />

                        <div className="grid gap-6 md:grid-cols-2">
                            <InfoPanel title="Share Your Music">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Publishing music allows listeners to discover
                                    your work and gives you a place to build your
                                    musical presence inside the Pezhvak community.
                                </p>

                                <div className="mt-6 space-y-3">
                                    <ChecklistItem>
                                        Publish your original work
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Organize your music by genre
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Keep track information clear
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Build a consistent artist identity
                                    </ChecklistItem>
                                </div>
                            </InfoPanel>

                            <InfoPanel title="Monetization">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Monetization options depend on the features,
                                    payment system, and final policies available
                                    on Pezhvak.
                                </p>

                                <div className="mt-6 rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-5">
                                    <p className="text-sm leading-7 text-[var(--color-muted-text)]">
                                        When monetization features are available,
                                        check the relevant Pezhvak terms and
                                        platform policies before publishing paid
                                        content or expecting earnings.
                                    </p>
                                </div>
                            </InfoPanel>
                        </div>
                    </section>

                    <section data-aos='fade-up' id="explore" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="05"
                            title="Explore & Discover"
                            description="Pezhvak is not only a place to publish your own work. Explore the wider musical community."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <GuideCard
                                number="01"
                                title="Discover Artists"
                                description="Explore other musicians and discover different creative styles."
                            />

                            <GuideCard
                                number="02"
                                title="Listen to Music"
                                description="Find tracks across different genres and musical communities."
                            />

                            <GuideCard
                                number="03"
                                title="Explore Lessons"
                                description="Learn from educational content created by teachers and musicians."
                            />

                            <GuideCard
                                number="04"
                                title="Find Inspiration"
                                description="Use the community to discover new ideas, sounds, techniques, and collaborations."
                            />
                        </div>
                    </section>

                    <section data-aos='fade-up' id="genres" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="06"
                            title="Genres & Musical Identity"
                            description="Use genres and musical categories to help listeners understand and discover your work."
                        />

                        <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 sm:p-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div>
                                    <h3 className="mb-5 text-xl font-semibold">
                                        Choose Relevant Categories
                                    </h3>

                                    <div className="space-y-4">
                                        <ChecklistItem>
                                            Select the genre that best describes your track
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Use consistent information across your releases
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Avoid unrelated categories
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Keep your artist identity clear
                                        </ChecklistItem>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-6">
                                    <h3 className="mb-4 text-lg font-semibold">
                                        Why It Matters
                                    </h3>

                                    <p className="text-sm leading-7 text-[var(--color-muted-text)]">
                                        Clear genre information helps listeners
                                        understand your music and can make your
                                        content easier to explore alongside
                                        similar musical work.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <MiniTag>Rock</MiniTag>
                                        <MiniTag>Pop</MiniTag>
                                        <MiniTag>Jazz</MiniTag>
                                        <MiniTag>Classical</MiniTag>
                                        <MiniTag>Electronic</MiniTag>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section data-aos='fade-up' id="community" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="07"
                            title="Be Part of the Community"
                            description="Music becomes more meaningful when artists and listeners can connect."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <GuideCard
                                number="01"
                                title="Interact"
                                description="Participate in conversations and interact with other members of the community."
                            />

                            <GuideCard
                                number="02"
                                title="Share Feedback"
                                description="Give constructive feedback and learn from the experiences of other musicians."
                            />

                            <GuideCard
                                number="03"
                                title="Discover Others"
                                description="Explore other artists and find music outside your usual listening habits."
                            />

                            <GuideCard
                                number="04"
                                title="Stay Active"
                                description="Keep your profile and content active as you continue your musical journey."
                            />
                        </div>
                    </section>

                    <section data-aos='fade-up' id="lessons" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="08"
                            title="Learn & Teach"
                            description="Artists can also benefit from the educational side of Pezhvak."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <InfoPanel title="Learn From Others">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Explore lessons created by teachers and other
                                    musicians to improve your technique, knowledge,
                                    and understanding of music.
                                </p>

                                <div className="mt-6 space-y-3">
                                    <ChecklistItem>
                                        Explore lessons for your instrument
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Learn new techniques
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Improve your musical knowledge
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Practice with structured content
                                    </ChecklistItem>
                                </div>
                            </InfoPanel>

                            <InfoPanel title="Share Your Knowledge">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    If you also want to teach, you can explore the
                                    Teacher experience and create educational
                                    content for other learners.
                                </p>

                                <Link
                                    to="/teacher-guide"
                                    className="mt-6 inline-flex rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] px-5 py-3 text-sm font-medium text-[var(--color-tiffany-txt)] transition hover:border-[var(--color-tiffany-bg)]"
                                >
                                    Explore Teacher Guide
                                </Link>
                            </InfoPanel>
                        </div>
                    </section>

                    <section data-aos='fade-up' id="activities" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="09"
                            title="Track Your Activity"
                            description="Your activity page can help you understand and manage your presence on Pezhvak."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <ActivityCard
                                title="Music"
                                description="Keep track of the music you have shared and published."
                            />

                            <ActivityCard
                                title="Comments"
                                description="Review your interactions with listeners and other community members."
                            />

                            <ActivityCard
                                title="Engagement"
                                description="Understand how users interact with your content."
                            />

                            <ActivityCard
                                title="Updates"
                                description="Keep your profile and creative content organized and updated."
                            />
                        </div>

                        <Link
                            to="/activities"
                            className="mt-7 inline-flex rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] px-5 py-3 text-sm font-medium text-[var(--color-tiffany-txt)] transition hover:border-[var(--color-tiffany-bg)]"
                        >
                            View Activities
                        </Link>
                    </section>

                    <section data-aos='fade-up' id="journey" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="10"
                            title="Your Artist Journey"
                            description="A simple path for building your presence and continuing your musical journey on Pezhvak."
                        />

                        <div className="grid gap-5 md:grid-cols-5">
                            <JourneyStep
                                number="01"
                                title="Profile"
                                description="Create your artist identity."
                            />

                            <JourneyStep
                                number="02"
                                title="Create"
                                description="Prepare your musical work."
                            />

                            <JourneyStep
                                number="03"
                                title="Publish"
                                description="Share your music with the community."
                            />

                            <JourneyStep
                                number="04"
                                title="Connect"
                                description="Interact with listeners and artists."
                            />

                            <JourneyStep
                                number="05"
                                title="Improve"
                                description="Keep developing your musical presence."
                            />
                        </div>
                    </section>

                    <section data-aos='fade-up' id="faq" className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="11"
                            title="Artist FAQ"
                            description="Answers to common questions about being an Artist on Pezhvak."
                        />

                        <div className="mx-auto max-w-4xl space-y-3">
                            {faqItems.map((item, index) => (
                                <div
                                    key={item.question}
                                    className="overflow-hidden rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)]"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                                    >
                                        <span className="font-medium">
                                            {item.question}
                                        </span>

                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-neutralGreen-br)] text-[var(--color-tiffany-txt)]">
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openFaq === index && (
                                        <div className="border-t border-[var(--color-DarkGreen-br)] px-5 py-5">
                                            <p className="text-sm leading-8 text-[var(--color-muted-text)]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section data-aos='fade-up'>
                        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-neutralGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-8 text-center sm:p-12">
                            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--color-tiffany-bg)]/10 blur-3xl" />

                            <div className="relative">
                                <h2 className="text-3xl font-bold">
                                    Ready to Share Your Music?
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--color-muted-text)]">
                                    Turn your musical ideas into something others
                                    can discover, listen to, and connect with.
                                </p>

                                <Link
                                    to="/upload"
                                    className="mt-7 inline-flex rounded-xl bg-[var(--color-tiffany-bg)] px-7 py-3 font-semibold text-[var(--color-darkest-blue-bg)] transition hover:scale-[1.02]"
                                >
                                    Upload Your Music
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

const SectionTitle = ({ eyebrow, title, description }) => (
    <div className="mb-10 max-w-3xl">
        <span className="text-sm font-semibold tracking-wider text-[var(--color-tiffany-txt)]">
            {eyebrow}
        </span>

        <h2 className="mt-2 text-3xl font-bold">
            {title}
        </h2>

        <p className="mt-3 leading-8 text-[var(--color-muted-text)]">
            {description}
        </p>
    </div>
);

const GuideCard = ({ number, title, description }) => (
    <div className="group rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-neutralGreen-br)]">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-green-bg)] text-sm font-bold text-[var(--color-tiffany-txt)]">
            {number}
        </span>

        <h3 className="mt-5 text-xl font-semibold">
            {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[var(--color-muted-text)]">
            {description}
        </p>
    </div>
);

const InfoPanel = ({ title, children }) => (
    <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 sm:p-8">
        <h3 className="mb-6 text-xl font-semibold">
            {title}
        </h3>

        {children}
    </div>
);

const ListItem = ({ children }) => (
    <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-tiffany-bg)]" />

        <span className="leading-7">
            {children}
        </span>
    </li>
);

const ChecklistItem = ({ children }) => (
    <div className="flex items-start gap-3 text-sm text-[var(--color-muted-text)]">
        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-green-bg)] text-xs text-[var(--color-tiffany-txt)]">
            ✓
        </span>

        <span className="leading-6">
            {children}
        </span>
    </div>
);

const MiniTag = ({ children }) => (
    <div className="rounded-lg border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] px-4 py-3 text-sm text-[var(--color-tiffany-txt)]">
        {children}
    </div>
);

const ActivityCard = ({ title, description }) => (
    <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6">
        <div className="mb-5 h-10 w-10 rounded-xl bg-[var(--color-green-bg)]" />

        <h3 className="text-lg font-semibold">
            {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[var(--color-muted-text)]">
            {description}
        </p>
    </div>
);

const JourneyStep = ({ number, title, description }) => (
    <div className="relative rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-5 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green-bg)] font-bold text-[var(--color-tiffany-txt)]">
            {number}
        </div>

        <h3 className="mt-4 font-semibold">
            {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--color-muted-text)]">
            {description}
        </p>
    </div>
);

export default ArtistGuide;