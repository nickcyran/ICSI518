## Problem Statement

Software developers applying for jobs need to have a way to show off their personality, past projects, skills, and contact information. Traditional resumes do this, and are great at capturing experience on paper, but fail at demonstrating a developer's true ability. A portfolio website demonstrates the application of a developer's real skills from frontend to backend.

## Objectives
- **Developer Identity:** Showcase my education, background, technical skills, and past projects. 
- **Dynamic User Interface:** Fully responsive frontend (web + mobile), with accessibility options such as light/dark mode.
- **Database Driven Content:** Projects are queried from the (MongoDB) backend rather than being hardcoded into the clientside code.
- **Contact:** Make myself easily accessible to those who like what I've created.  
- **Challenge Myself:** Utilize my background and implement a GLSL raymarching shader for style.
---

> ###  [IMPORTANT]
> **DB and email functionality may not work when testing locally.** The `.env` file containing API keys and the MongoDB connection string is not included in this repository as I do not feel comfortable including them.

## Frontend

```bash
npm install
npm run dev
```

## Server

```bash
cd server
npm install
npm run dev
```

The server runs on `http://localhost:5000` and connects to MongoDB to serve project data at `/api/projects`.

## Dependencies

### Frontend

| Package | Purpose |
|---|---|
| Vite | Local development server |
| React | UI - component rendering and state
| Three.js | WebGL rendering for the animated GLSL shader background |
| EmailJS | Sends contact form emails directly from the browser without a backend |

### Backend

| Package | Purpose |
|---|---|
| MongoDB | For querying the projects from database |
| Express | HTTP server that exposes the `/api/projects` route |
| cors | Allows the Vite dev server to call the API |
| dotenv | Loads environment variables from `.env` |
