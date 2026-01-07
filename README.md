# Explora - Travel Booking System

Explora is a comprehensive travel booking platform designed to facilitate seamless tour booking experiences. Built with the MERN stack (MongoDB, Express, React, Node.js), it offers a responsive and user-friendly interface for browsing tours, managing bookings, and sharing travel experiences through reviews.

## 🚀 Features

### General
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Reactstrap and Bootstrap.
- **Search & Filter**: Find tours by location, distance, and maximum group size.

### User Features (Travelers)
- **Authentication**: Secure Login and Registration.
- **Browse Tours**: View featured tours and comprehensive tour lists with details like price, rating, and duration.
- **Booking**: Easy booking process for selected tours.
- **Reviews**: detailed review system allowing users to rate and comment on tours.
- **Gallery**: Visual tour gallery.

### Admin Features
- **Tour Management**: Create, update, and delete tour listings.
- **Role-Based Access Control**: Protected routes ensuring only authorized users/admins can perform sensitive actions.

## 🛠 Tech Stack

### Frontend (`Explora/tour-management/frontend`)
- **React.js**: Component-based UI library.
- **React Router**: For client-side routing.
- **Reactstrap & Bootstrap**: For styling and layout.
- **Remixicon**: For icons.
- **Slick Carousel**: For image sliders.

### Backend (`Explora/tour-management/backend`)
- **Node.js**: Runtime environment.
- **Express.js**: Web application framework.
- **MongoDB & Mongoose**: NoSQL database and object modeling.
- **JsonWebToken (JWT)**: For secure authentication.
- **Bcrypt.js**: For password hashing.
- **Cors & Cookie-Parser**: For handling requests and sessions.

## 📂 Project Structure

```bash
Explora/
├── tour-management/
│   ├── backend/         # Server-side logic, API connection, and Database models
│   │   ├── controllers/ # Logic for Auth, Bookings, Reviews, Tours, Users
│   │   ├── models/      # Mongoose Schemas (Tour, User, Booking, Review)
│   │   ├── routes/      # API endpoints definitions
│   │   └── index.js     # Entry point for backend server
│   ├── frontend/        # Client-side React application
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components
│   │   │   ├── pages/      # Main application pages
│   │   │   ├── router/     # Navigation configuration
│   │   │   ├── services/   # API call services
│   │   │   └── shared/     # Shared styles and utility components
```

*Note: The workspace also includes a `myapp` directory which is a Java Spring Boot application structure, possibly a microservice or separate component.*

## ⚙️ Installation & Usage

### Prerequisites
- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

### 1. Backend Setup
Navigate to the backend directory:
```bash
cd Explora/tour-management/backend
```

Install dependencies:
```bash
npm install
```

**Configuration**:
Create a `.env` file in the `backend` folder with the following variables:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

Start the server:
```bash
npm start
# or for development mode
npm run start-dev
```
The server will run on `http://localhost:4000` (or your defined port).

### 2. Frontend Setup
Open a new terminal and navigate to the frontend directory:
```bash
cd Explora/tour-management/frontend
```

Install dependencies:
```bash
npm install
```

Start the React application:
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`.

## 🔗 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **Auth** | | |
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | User login |
| **Tours** | | |
| GET | `/api/v1/tours` | Get all tours |
| GET | `/api/v1/tours/:id` | Get single tour details |
| POST | `/api/v1/tours` | Create a new tour (Admin) |
| PUT | `/api/v1/tours/:id` | Update a tour (Admin) |
| DELETE | `/api/v1/tours/:id` | Delete a tour (Admin) |
| GET | `/api/v1/tours/search/getTourBySearch` | Search tours |
| **Users** | | |
| GET | `/api/v1/users` | Get all users (Admin) |
| PUT | `/api/v1/users/:id` | Update user |
| DELETE | `/api/v1/users/:id` | Delete user |
| **Bookings** | | |
| POST | `/api/v1/bookings` | Create a booking |
| GET | `/api/v1/bookings/:id` | Get booking details |
| **Reviews** | | |
| POST | `/api/v1/review/:tourId` | Submit a review for a tour |

## 📜 License
This project is licensed under the MIT License.
