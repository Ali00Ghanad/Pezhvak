import { useState } from "react";
import { Link } from "react-router-dom";

const TeacherGuide = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqItems = [
        {
            question: "What do I need to become a Teacher on Pezhvak?",
            answer:
                "To get started, create a complete teacher profile and prepare useful educational content. You can then create a lesson, upload your video and supporting materials, and publish it.",
        },
        {
            question: "Can I publish a free lesson?",
            answer:
                "Yes. You can create free educational content and share your knowledge with the Pezhvak community.",
        },
        {
            question: "Can I upload files along with my lesson?",
            answer:
                "Yes. Depending on the lesson, you can provide supporting materials such as PDFs, sheet music, exercises, practice files, or other useful resources.",
        },
        {
            question: "How can students discover my lessons?",
            answer:
                "Clear titles, descriptions, instruments, categories, and skill levels help students understand your content and find lessons that match their needs.",
        },
        {
            question: "Can I create multiple lessons?",
            answer:
                "Yes. You can build multiple lessons and organize your educational content around different instruments, topics, techniques, or skill levels.",
        },
        {
            question: "Can I interact with my students?",
            answer:
                "You can interact with learners through comments and other community features available on Pezhvak. Use feedback and questions to improve the learning experience.",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-darkest-blue-bg)] text-white">
            {/* Hero */}
            <section data-aos='fade-up' className="relative overflow-hidden">
                <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-tiffany-bg)]/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex rounded-full border border-[var(--color-neutralGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] px-4 py-2 text-sm text-[var(--color-tiffany-txt)]">
                            Teacher Guide
                        </span>

                        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Teach. Share. Help Others Grow.
                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-[var(--color-muted-text)] sm:text-lg">
                            Everything you need to know about becoming a Teacher
                            on Pezhvak, creating lessons, sharing your knowledge,
                            and building a better learning experience for your students.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/upload-lesson"
                                className="rounded-xl bg-[var(--color-tiffany-bg)] px-6 py-3 font-semibold text-[var(--color-darkest-blue-bg)] transition hover:scale-[1.02]"
                            >
                                Create Your First Lesson
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

            {/* Quick Navigation */}
            <section data-aos='fade-up' className="border-y border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)]">
                <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12">
                    {[
                        ["getting-started", "Getting Started"],
                        ["profile", "Teacher Profile"],
                        ["lessons", "Create Lessons"],
                        ["content", "Lesson Content"],
                        ["students", "Students"],
                        ["discovery", "Discovery"],
                        ["activities", "Activities"],
                        ["quality", "Quality"],
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

                    {/* Getting Started */}
                    <section
                        id="getting-started"
                        className="scroll-mt-24"
                        data-aos='fade-up'
                    >
                        <SectionTitle
                            eyebrow="01"
                            title="Getting Started as a Teacher"
                            description="Start your teaching journey on Pezhvak with a clear and simple process."
                        />

                        <div className="grid gap-6 md:grid-cols-3">
                            <GuideCard
                                number="01"
                                title="Build Your Profile"
                                description="Create a complete teacher profile so students can understand who you are and what you teach."
                            />

                            <GuideCard
                                number="02"
                                title="Create a Lesson"
                                description="Choose a topic, define the level, prepare your video, and organize your educational materials."
                            />

                            <GuideCard
                                number="03"
                                title="Publish & Teach"
                                description="Publish your lesson and start helping students improve their skills through your content."
                            />
                        </div>
                    </section>

                    {/* Profile */}
                    <section
                        id="profile"
                        className="scroll-mt-24"
                        data-aos='fade-up'
                    >
                        <SectionTitle
                            eyebrow="02"
                            title="Your Teacher Profile"
                            description="Your profile is the first place where students learn about you."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <InfoPanel title="What to Include">
                                <ul className="space-y-4 text-[var(--color-muted-text)]">
                                    <ListItem>
                                        Your name or professional teaching name
                                    </ListItem>

                                    <ListItem>
                                        A clear and recognizable profile picture
                                    </ListItem>

                                    <ListItem>
                                        A short introduction about your experience
                                    </ListItem>

                                    <ListItem>
                                        The instruments or subjects you teach
                                    </ListItem>

                                    <ListItem>
                                        The skill levels you teach
                                    </ListItem>
                                </ul>
                            </InfoPanel>

                            <InfoPanel title="Make Your Profile Useful">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Help students quickly understand who you are,
                                    what you teach, and what kind of learning
                                    experience they can expect from your content.
                                </p>

                                <div className="mt-6 rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-5">
                                    <p className="text-sm leading-7 text-[var(--color-tiffany-txt)]">
                                        A useful teacher profile should answer three questions:
                                    </p>

                                    <div className="mt-4 space-y-3 text-sm text-[var(--color-muted-text)]">
                                        <p>• What do you teach?</p>
                                        <p>• Who are your lessons for?</p>
                                        <p>• What can students learn from you?</p>
                                    </div>
                                </div>
                            </InfoPanel>
                        </div>
                    </section>

                    {/* Lessons */}
                    <section
                        data-aos='fade-up'
                        id="lessons"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="03"
                            title="Creating a Lesson"
                            description="A good lesson is more than just uploading a video."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            <GuideCard
                                number="01"
                                title="Lesson Title"
                                description="Choose a clear title that immediately explains what students will learn."
                            />

                            <GuideCard
                                number="02"
                                title="Description"
                                description="Explain what students will learn and what they should expect from the lesson."
                            />

                            <GuideCard
                                number="03"
                                title="Instrument"
                                description="Select the main instrument or subject covered by the lesson."
                            />

                            <GuideCard
                                number="04"
                                title="Category"
                                description="Place the lesson in the most relevant category to make it easier to discover."
                            />

                            <GuideCard
                                number="05"
                                title="Skill Level"
                                description="Specify whether the lesson is suitable for beginners, intermediate learners, or advanced students."
                            />

                            <GuideCard
                                number="06"
                                title="Language"
                                description="Choose the main language used in your lesson and its supporting content."
                            />
                        </div>
                    </section>

                    {/* Content */}
                    <section
                        data-aos='fade-up'
                        id="content"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="04"
                            title="Build Better Lesson Content"
                            description="Organize your educational content into a clear and useful learning experience."
                        />

                        <div className="grid gap-8 lg:grid-cols-2">
                            <InfoPanel title="Lesson Video">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    Your video should clearly explain the main topic
                                    of the lesson. Before recording, plan what students
                                    should learn from the beginning to the end.
                                </p>

                                <div className="mt-6 space-y-3">
                                    <ChecklistItem>
                                        Clear audio and video
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Step-by-step explanations
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Practical examples
                                    </ChecklistItem>

                                    <ChecklistItem>
                                        Comfortable teaching pace
                                    </ChecklistItem>
                                </div>
                            </InfoPanel>

                            <InfoPanel title="Supporting Files">
                                <p className="leading-8 text-[var(--color-muted-text)]">
                                    If your lesson requires additional materials,
                                    provide useful resources that students can use
                                    while practicing.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <MiniTag>PDF</MiniTag>
                                    <MiniTag>Sheet Music</MiniTag>
                                    <MiniTag>Practice Files</MiniTag>
                                    <MiniTag>Exercises</MiniTag>
                                </div>
                            </InfoPanel>
                        </div>

                        <div className="mt-8 rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 sm:p-8">
                            <h3 className="mb-4 text-xl font-semibold">
                                Structure Your Lesson
                            </h3>

                            <div className="grid gap-4 md:grid-cols-4">
                                <StepBox
                                    number="01"
                                    title="Introduction"
                                    description="Introduce the topic and explain what students will learn."
                                />

                                <StepBox
                                    number="02"
                                    title="Main Lesson"
                                    description="Teach the main concepts and techniques."
                                />

                                <StepBox
                                    number="03"
                                    title="Practice"
                                    description="Give students examples and exercises to practice."
                                />

                                <StepBox
                                    number="04"
                                    title="Conclusion"
                                    description="Summarize the most important points."
                                />
                            </div>
                        </div>
                    </section>

                    {/* Pricing */}
                    <section data-aos='fade-up' className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="05"
                            title="Free or Paid Lessons"
                            description="Choose how you want to provide your educational content."
                        />

                        <div className="grid gap-6 md:grid-cols-2">
                            <PricingCard
                                title="Free Lessons"
                                description="Free content can help students discover your teaching style and learn from your knowledge."
                                items={[
                                    "Accessible to users",
                                    "Great for short lessons",
                                    "Useful for introductory content",
                                    "A way to showcase your teaching style",
                                ]}
                            />

                            <PricingCard
                                title="Paid Lessons"
                                description="For more complete educational content, paid lessons can be used when the Pezhvak payment system supports paid educational content."
                                items={[
                                    "More comprehensive content",
                                    "Structured learning paths",
                                    "Practice materials and resources",
                                    "More in-depth educational experiences",
                                ]}
                            />
                        </div>

                        <p className="mt-5 text-sm leading-7 text-[var(--color-muted-text)]">
                            Pricing, payments, and teacher earnings depend on the
                            final Pezhvak platform policies and payment system.
                        </p>
                    </section>

                    {/* Students */}
                    <section
                        data-aos='fade-up'
                        id="students"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="06"
                            title="Working With Students"
                            description="Teaching is not only about publishing content. Interaction also matters."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <GuideCard
                                number="01"
                                title="Answer Questions"
                                description="Help students understand difficult parts of your lessons by answering relevant questions."
                            />

                            <GuideCard
                                number="02"
                                title="Read Feedback"
                                description="Use student feedback to understand which parts of your lessons can be improved."
                            />

                            <GuideCard
                                number="03"
                                title="Improve Lessons"
                                description="Update explanations, resources, or lesson structure when improvements are needed."
                            />

                            <GuideCard
                                number="04"
                                title="Stay Active"
                                description="Keep your educational presence active by regularly maintaining your content."
                            />
                        </div>
                    </section>

                    {/* Discovery */}
                    <section
                        data-aos='fade-up'
                        id="discovery"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="07"
                            title="Help Students Discover Your Lessons"
                            description="Good lesson information makes it easier for students to find the right content."
                        />

                        <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 sm:p-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div>
                                    <h3 className="mb-5 text-xl font-semibold">
                                        Pay Attention to Your Lesson Information
                                    </h3>

                                    <div className="space-y-4">
                                        <ChecklistItem>
                                            Use a clear and specific title
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Select the correct instrument
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Choose the right skill level
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Select the most relevant category
                                        </ChecklistItem>

                                        <ChecklistItem>
                                            Write a useful description
                                        </ChecklistItem>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-6">
                                    <h3 className="mb-4 text-lg font-semibold">
                                        Example
                                    </h3>

                                    <p className="text-sm leading-7 text-[var(--color-muted-text)]">
                                        Instead of using a generic title such as:
                                    </p>

                                    <p className="mt-2 text-[var(--color-muted-text)] line-through">
                                        Guitar Lesson 1
                                    </p>

                                    <p className="mt-5 text-sm leading-7 text-[var(--color-muted-text)]">
                                        Use a title that tells students more about the lesson:
                                    </p>

                                    <p className="mt-2 font-medium text-[var(--color-tiffany-txt)]">
                                        Beginner Guitar — Learn Your First Chords
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Activities */}
                    <section
                        data-aos='fade-up'
                        id="activities"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="08"
                            title="Track Your Teaching Activity"
                            description="Your activity page can help you keep track of your work and engagement on Pezhvak."
                        />

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <ActivityCard
                                title="Lessons"
                                description="Keep track of the educational lessons you have published."
                            />

                            <ActivityCard
                                title="Comments"
                                description="Review your interactions with students and other users."
                            />

                            <ActivityCard
                                title="Updates"
                                description="Keep your educational content updated and organized."
                            />

                            <ActivityCard
                                title="Engagement"
                                description="Understand how users interact with your educational content."
                            />
                        </div>

                        <Link
                            to="/activityData"
                            className="mt-7 inline-flex rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] px-5 py-3 text-sm font-medium text-[var(--color-tiffany-txt)] transition hover:border-[var(--color-tiffany-bg)]"
                        >
                            View Activities
                        </Link>
                    </section>

                    {/* Quality */}
                    <section
                        data-aos='fade-up'
                        id="quality"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="09"
                            title="Quality Guidelines"
                            description="A few simple principles can help you create a better learning experience."
                        />

                        <div className="grid gap-6 md:grid-cols-2">
                            <QualityCard
                                title="Be Clear"
                                description="Explain what students are going to learn before starting the main lesson."
                            />

                            <QualityCard
                                title="Teach Step by Step"
                                description="Move from simple concepts to more advanced ones without unnecessary jumps."
                            />

                            <QualityCard
                                title="Use Practical Examples"
                                description="Whenever possible, support theoretical explanations with practical examples."
                            />

                            <QualityCard
                                title="Keep It Organized"
                                description="Keep your title, description, files, chapters, and lesson structure organized."
                            />

                            <QualityCard
                                title="Respect Your Students"
                                description="Treat questions and feedback respectfully and use them to improve the learning experience."
                            />

                            <QualityCard
                                title="Keep Improving"
                                description="Use feedback and your own experience to continuously improve your future lessons."
                            />
                        </div>
                    </section>

                    {/* Teacher Journey */}
                    <section data-aos='fade-up' className="scroll-mt-24">
                        <SectionTitle
                            eyebrow="10"
                            title="Your Teacher Journey"
                            description="A simple path for starting your teaching journey on Pezhvak."
                        />

                        <div className="grid gap-5 md:grid-cols-5">
                            <JourneyStep
                                number="01"
                                title="Profile"
                                description="Complete your teacher profile."
                            />

                            <JourneyStep
                                number="02"
                                title="Plan"
                                description="Choose the topic for your first lesson."
                            />

                            <JourneyStep
                                number="03"
                                title="Create"
                                description="Prepare your video and supporting materials."
                            />

                            <JourneyStep
                                number="04"
                                title="Publish"
                                description="Publish your lesson on Pezhvak."
                            />

                            <JourneyStep
                                number="05"
                                title="Improve"
                                description="Learn from feedback and improve."
                            />
                        </div>
                    </section>

                    {/* FAQ */}
                    <section
                        data-aos='fade-up'
                        id="faq"
                        className="scroll-mt-24"
                    >
                        <SectionTitle
                            eyebrow="11"
                            title="Teacher FAQ"
                            description="Answers to common questions about teaching on Pezhvak."
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

                    {/* CTA */}
                    <section data-aos='fade-up' className="scroll-mt-24">
                        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-neutralGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-8 text-center sm:p-12">
                            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--color-tiffany-bg)]/10 blur-3xl" />

                            <div className="relative">
                                <h2 className="text-3xl font-bold">
                                    Ready to Teach?
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--color-muted-text)]">
                                    Turn your knowledge into a learning experience
                                    and create your first lesson on Pezhvak.
                                </p>

                                <Link
                                    to="/uploadLesson"
                                    className="mt-7 inline-flex rounded-xl bg-[var(--color-tiffany-bg)] px-7 py-3 font-semibold text-[var(--color-darkest-blue-bg)] transition hover:scale-[1.02]"
                                >
                                    Upload a Lesson
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

const SectionTitle = ({ eyebrow, title, description }) => {
    return (
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
};

const GuideCard = ({ number, title, description }) => {
    return (
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
};

const InfoPanel = ({ title, children }) => {
    return (
        <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold">
                {title}
            </h3>

            {children}
        </div>
    );
};

const ListItem = ({ children }) => {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-tiffany-bg)]" />
            <span className="leading-7">{children}</span>
        </li>
    );
};

const ChecklistItem = ({ children }) => {
    return (
        <div className="flex items-start gap-3 text-sm text-[var(--color-muted-text)]">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-green-bg)] text-xs text-[var(--color-tiffany-txt)]">
                ✓
            </span>

            <span className="leading-6">
                {children}
            </span>
        </div>
    );
};

const MiniTag = ({ children }) => {
    return (
        <div className="rounded-lg border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] px-4 py-3 text-sm text-[var(--color-tiffany-txt)]">
            {children}
        </div>
    );
};

const StepBox = ({ number, title, description }) => {
    return (
        <div className="rounded-xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkest-blue-bg)] p-5">
            <span className="text-xs font-bold text-[var(--color-tiffany-txt)]">
                {number}
            </span>

            <h4 className="mt-3 font-semibold">
                {title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-[var(--color-muted-text)]">
                {description}
            </p>
        </div>
    );
};

const PricingCard = ({ title, description, items }) => {
    return (
        <div className="rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-7">
            <h3 className="text-2xl font-semibold">
                {title}
            </h3>

            <p className="mt-4 leading-8 text-[var(--color-muted-text)]">
                {description}
            </p>

            <div className="mt-6 space-y-3">
                {items.map((item) => (
                    <ChecklistItem key={item}>
                        {item}
                    </ChecklistItem>
                ))}
            </div>
        </div>
    );
};

const ActivityCard = ({ title, description }) => {
    return (
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
};

const QualityCard = ({ title, description }) => {
    return (
        <div className="flex gap-4 rounded-2xl border border-[var(--color-DarkGreen-br)] bg-[var(--color-darkblueLowVolume-bg)] p-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-green-bg)] text-[var(--color-tiffany-txt)]">
                ✓
            </div>

            <div>
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-muted-text)]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const JourneyStep = ({ number, title, description }) => {
    return (
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
};

export default TeacherGuide;