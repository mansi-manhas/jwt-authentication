# JWT Authentication with Node.js and React

This project demonstrates a full-stack application with end-to-end authentication using JSON Web Tokens (JWT). It includes both backend (Node.js and Express) and frontend (React) setups.

## Project Structure

- **Backend:** Node.js, Express
- **Frontend:** React

## Features

- User Registration
- User Login
- JWT-based Authentication
- CORS Configuration

## Getting Started

### Prerequisites

- Node.js (v12+)
- npm or yarn

### Backend Setup

1. Clone the repository and navigate to the backend directory:

    ```bash
    git clone https://github.com/mansi-manhas/jwt-authentication.git
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following environment variables:

    ```env
    JWT_SECRET=your_generated_strong_secret_key
    ALLOWED_ORIGINS=http://localhost:3002
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Endpoints

### Backend API

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### Frontend Routes

- `/register` - Registration page
- `/login` - Login page

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - bcryptjs (for password hashing)
  - jsonwebtoken (for JWT creation and verification)
  - dotenv (for environment variable management)
  - cors (for Cross-Origin Resource Sharing)

- **Frontend:**
  - React
  - axios (for HTTP requests)
  - react-router-dom (for routing)

## License

This project is licensed under the MIT License.
