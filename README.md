# MS Dhoni Tribute Website

![HTML](https://img.shields.io/badge/HTML5-pages-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-styling-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)

A static, three-page tribute site about Mahendra Singh Dhoni. It combines a biography and achievements page, a career timeline, and an IPL results page.

## Features

- Home page with biography, achievements, and a cricket-themed hero
- Dedicated career timeline page
- IPL results page with separate styling and browser-side behavior
- Local JPG imagery and no external runtime services

## How it works

index.html is the entry page. The home page links to timeline.html and iplResults.html. The pages use plain HTML and CSS; JavaScript is kept in small companion files for browser interactions. No framework, API, or persistent data layer is used.

## Architecture

Browser → HTML pages → page-specific CSS and JavaScript → local image files

## Start locally

1. Clone or download the repository.
2. Keep the HTML, stylesheets, scripts, and image files together.
3. Open index.html in a modern browser.
4. Follow the site navigation to view the timeline and IPL results.

No dependency installation or build step is required. Use a static server if local file restrictions prevent assets from loading.

## Project layout

- index.html — biography and achievements
- timeline.html — career timeline
- iplResults.html — IPL results content
- style.css — home page styles
- styletimeline.css — timeline styles
- styleIplResults.css — results page styles
- script.js and scriptIplResults.js — browser behavior
- JPG files — backgrounds and cricket imagery

## Notes

Preserve existing image paths and filename capitalization when hosting. This repository has no configured test/build workflow and no license file listed.