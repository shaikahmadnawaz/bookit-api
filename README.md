# Concert Reservation System

## Overview

The Concert Reservation System is a web application designed to facilitate the booking of concert tickets. The system supports user authentication, concert management by administrators, and a seat reservation system for users. This project leverages modern technologies such as Node.js, Express, PostgreSQL, and JWT for secure user authentication.

## Features

### User Features

- **User Authentication**: Users can sign up and log in.
- **Browse Concerts**: Users can view available concerts and their showtimes.
- **Seat Reservation**: Users can select seats for a concert and make reservations.
- **Manage Reservations**: Users can view and cancel their reservations.

### Admin Features

- **Manage Concerts**: Admins can create, update, or delete concerts.
- **Manage Showtimes**: Admins can define showtimes for concerts.
- **View Reports**: Admins can access data on reservations, including the number of tickets sold and total revenue.

## Technologies Used

- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **ORM**: Drizzle
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Zod

## Project Setup

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shaikahmadnawaz/bookit-api.git
   cd bookit-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory with the following content:

   ```plaintext

    PORT=
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=5432
    DATABASE_USER=
    DATABASE_PASSWORD=
    DATABASE_NAME=

   ```

4. Initialize the database:
   Run the necessary migrations using Drizzle to set up your database schema.

5. Start the db using docker-compose:

   ```bash
   docker-compose up
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /auth/signup` - User registration
- `POST /auth/login` - User login

### Concert Management (Admin)

- `POST /concerts` - Create a new concert
- `GET /concerts` - Get list of all concerts
- `PUT /concerts/:id` - Update concert details
- `DELETE /concerts/:id` - Delete a concert

### Showtime Management (Admin)

- `POST /concerts/:id/showtimes` - Create showtime for a concert
- `GET /concerts/:id/showtimes` - Get showtimes for a concert
- `PUT /showtimes/:id` - Update showtime details
- `DELETE /showtimes/:id` - Delete a showtime

### Reservations (User)

- `GET /concerts/:id/showtimes/:showtimeId/seats` - Get available seats for a showtime
- `POST /concerts/:id/showtimes/:showtimeId/reserve` - Reserve seats
- `GET /users/:id/reservations` - View user reservations
- `DELETE /reservations/:id` - Cancel reservation

### Reporting (Admin)

- `GET /admin/reports/reservations` - Get all reservations, capacity, and revenue

## Future Enhancements

- Implement real-time notifications for users regarding reservation status.
- Enhance user interface for better user experience.
- Integrate payment processing for ticket purchases.
