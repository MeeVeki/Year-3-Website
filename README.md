# Year 3 Website — Online Tutoring Marketplace

A full-stack Year 3 project for browsing and booking tutoring lessons. Built with a Vue.js frontend and an Express/MongoDB backend.

## Tech Stack

**Frontend**
- Vue.js
- HTML / CSS
- JavaScript

**Backend**
- Node.js / Express
- MongoDB (via Mongoose)
- CORS, dotenv, body-parser

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes bundled with Node.js)
- Access to a MongoDB Atlas cluster (or local MongoDB instance)

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/MeeVeki/Year-3-Website.git
cd Year-3-Website
```

### 2. Set up the backend
```
npm install
```

Create a `.env` file in the project root with:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

(Optional) Seed the database with the starter lesson data:
```
node seed.js
```

Start the backend server:
```
npm start
```
or, for auto-reload during development:
```
npm run dev
```

The API will be available at `http://localhost:3000`.

### 3. Set up the frontend

*(Adjust this section once the frontend's own package.json/scripts are finalized — assuming a separate Vite/Vue setup.)*
```
npm install
npm run dev
```

Visit `http://localhost:5173` (or whichever port is shown in the terminal).

## Project Structure

```
Year-3-Website/
├── src/                # Vue source files (components, views, assets)
├── public/              # Static assets
├── index.html           # Frontend entry HTML file
├── server.js            # Express server & API routes
├── seed.js              # One-time script to seed MongoDB with lesson data
├── products.json         # Starter lesson data (subject, location, price, spaces available)
├── .env                  # Environment variables (MongoDB URI, port) — not committed
└── package.json          # Project dependencies and scripts
```

## API Endpoints

| Method | Endpoint        | Description                  |
|--------|-----------------|-------------------------------|
| GET    | `/lessons`      | Fetch all available lessons  |
| POST   | `/lessons`      | Add a new lesson              |
| DELETE | `/lessons/:id`  | Remove a lesson by ID         |

## Features

- [x] Backend API for managing tutoring lessons (subject, location, price, availability)
- [ ] Browse and search lessons by subject/location
- [ ] Add lessons to a cart
- [ ] Checkout flow
- [ ] Order/booking confirmation

## Author

Built by [MeeVeki](https://github.com/MeeVeki)
