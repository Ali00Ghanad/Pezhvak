# Pezhvak

<p align="center">
  <strong>A music-focused social platform concept built with React.</strong>
</p>

<p align="center">
  An experimental frontend project exploring music discovery, community, and music education.
</p>

---

## About

**Pezhvak** is an experimental web project built around the idea of combining **music discovery, social interaction, and music education** in a single interface.

The project explores how a platform for musicians, listeners, teachers, and learners could look and feel.

It is not intended to represent a finished or production-ready product. Instead, Pezhvak is a practical exploration of:

* Music-oriented UI/UX
* Social interactions
* Content discovery
* Music education
* Multilingual interfaces
* RTL/LTR layouts
* Interactive components
* Frontend architecture

The project is mainly focused on building and refining the **frontend experience**.

---

## Concept

The idea behind Pezhvak can be summarized in three words:

**Share · Explore · Learn**

The concept brings together several related experiences:

```text
                 PEZHvak
                    │
       ┌────────────┼────────────┐
       │            │            │
     Share        Explore       Learn
       │            │            │
    Artists       Music        Lessons
    Uploads       Genres       Teachers
    Content       Artists      Courses
       │            │            │
       └────────────┼────────────┘
                    │
                Community
```

The project explores the possibility of moving naturally between these experiences instead of treating them as completely separate products.

---

## What This Project Includes

### Music Discovery

The Explore section experiments with different ways of presenting music content, including:

* Trending tracks
* Genres
* Artists
* Music cards
* Likes and comments
* Free and paid content
* Interactive discovery sections

### Music Player

A shared music player is included in the application layout to experiment with persistent playback UI and music-related interactions.

### Lessons

The project also includes a music education section where lessons can be explored based on information such as:

* Teacher
* Skill level
* Duration
* Price
* Supporting content

### Multilingual UI

Pezhvak currently experiments with both **English and Persian** interfaces.

The layout also adapts between:

* `LTR`
* `RTL`

depending on the selected language.

### Responsive Interface

The UI is designed to work across different screen sizes while maintaining the visual hierarchy of the original layouts.

---

## Pages

The current project contains several main pages:

| Page         | Description                                              |
| ------------ | -------------------------------------------------------- |
| **Home**     | Introduction to the Pezhvak concept and featured content |
| **Explore**  | Music discovery, genres, artists and trending content    |
| **Lessons**  | Music lessons and educational content                    |
| **About Us** | Project story, concept and values                        |
| **Trend**    | Experimental space for trending content                  |

---

## Tech Stack

Pezhvak is built using a modern React frontend stack.

* **React 19**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Zustand**
* **i18next / react-i18next**
* **Motion**
* **AOS**
* **Embla Carousel**
* **React Icons**
* **Sonner**

The project intentionally uses a relatively lightweight stack so that the focus remains on the interface, component architecture, and user experience.

---

## Project Structure

```text
src/
│
├── Components/
│   ├── Navbar/
│   ├── Footer/
│   ├── PlayedMusic/
│   ├── TrendingOnExplore/
│   ├── ShortCuts/
│   └── ...
│
├── Feature/
│   ├── Home/
│   ├── Explore/
│   ├── Lessons/
│   └── AboutUs/
│
├── Pages/
│   ├── HomePage.jsx
│   ├── Explore.jsx
│   ├── Lessons.jsx
│   ├── AboutUs.jsx
│   └── TrendPage.jsx
│
├── StoredItems/
│   └── storeItem.js
│
├── assets/
│
├── App.jsx
├── MainLayout.jsx
├── i18n.js
├── main.jsx
└── index.css
```

The structure is organized around reusable components and feature-specific modules, making it easier to experiment with different parts of the interface without keeping everything inside page components.

---

## Getting Started

### Requirements

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Ali00Ghanad/Pezhvak.git
```

Navigate to the project:

```bash
cd Pezhvak
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

---

## Current State

Pezhvak is currently a **frontend-focused experimental project**.

Most of the current data is local or mocked and is used to demonstrate the intended interface and interactions.

This includes areas such as:

* Music
* Artists
* Lessons
* Prices
* Likes
* Comments
* Engagement information

There is currently no requirement for a production backend for the project to run.

The purpose at this stage is primarily to explore the **design, structure, interaction patterns, and overall experience** of the concept.

---

## What I Wanted to Explore

This project was an opportunity to experiment with several frontend concepts in one place:

### Component Architecture

Breaking a relatively large interface into reusable and feature-specific components.

### State Management

Using Zustand for client-side state where shared state is useful.

### Internationalization

Supporting multiple languages while also handling differences in text direction.

### Animation

Using animation libraries to make transitions and content sections feel more dynamic without turning the interface into an overly animated experience.

### Responsive Design

Keeping the same visual language across different viewport sizes.

### Content-Heavy Interfaces

Working with music cards, educational content, user information, metadata, and interactive sections without making the interface feel overloaded.

---

## Possible Next Steps

Since Pezhvak is an experimental project, there are several directions it could take if development continues.

Some possible additions include:

* Backend integration
* Authentication
* Real user profiles
* Persistent music data
* Real audio uploads
* Search and filtering
* Persistent likes and comments
* Playlists
* Artist pages
* Teacher profiles
* Course management
* Payment integration
* More advanced social interactions

These are potential directions rather than features currently implemented in the project.

---

## Notes

Pezhvak started as an exploration of what a music-centered social interface could look like.

The project is intentionally kept open-ended, making it possible to experiment with different ideas without treating the current implementation as a final architecture or product specification.

---

## License

No license has been defined for this project yet.

---

<p align="center">
  Built as an experiment with React, music, and interface design.
</p>
