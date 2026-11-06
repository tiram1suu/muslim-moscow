# Muslim Moscow

Muslim Moscow is a mobile-first web application designed as a personal guide to Muslim infrastructure in Moscow. The project is currently a frontend prototype developed for an academic business case and intended for future commercial use.

## Overview

The application helps users navigate the city by providing access to verified information about mosques, halal restaurants, supermarkets, and women-only beauty salons. It includes a personalized onboarding flow, live data integrations, and a responsive interface.

## Features

- **Onboarding and Personalization:** Users select their status (tourist or local resident) and gender. The interface adapts accordingly. For example, beauty salons are hidden for male users, and a 22-day adaptation guide is displayed for tourists.
- **Interactive Maps:** Integrated Leaflet maps with custom markers for all locations. A mini-map is available on the home screen, with a full-screen map view available separately.
- **Live Data:** Real-time weather updates and daily prayer times are fetched based on the user's geolocation. The nearest mosque is calculated dynamically.
- **Filtering and Search:** Users can filter locations by category and search by name or address.
- **Favorites:** Users can save locations to a personal list stored locally.
- **Multilingual Support:** The interface supports Russian and English, with automatic language detection based on the user's browser settings.
- **Profile Management:** Users can upload a profile picture, change their display name, and reset their onboarding preferences.

## Tech Stack

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Leaflet (OpenStreetMap)
- Open-Meteo API (Weather)
- Aladhan API (Prayer Times)
- LocalStorage (Data persistence)

## Project Structure

- `index.html` — Main application structure
- `styles.css` — All styling and responsive layout
- `app.js` — Application logic, API integrations, and state management
- `places.js` — Static database of locations with Russian and English translations

## License

Copyright (c) 2026. All rights reserved.

This project is proprietary and not open-source. The source code is provided for viewing and academic evaluation purposes only. No permission is granted to use, copy, modify, or distribute this code for any purpose without explicit written permission from the author. Unauthorized use is strictly prohibited.# muslim-moscow
