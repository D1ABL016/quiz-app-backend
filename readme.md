# Project Title

This project is a web application built with Next.js for the client-side and Express.js for the server-side. It includes user authentication, role-based access control, and a structured study plan for previous year questions.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/D1ABL016/quiz-app-backend.git
    cd your-repo
    ```

2. Install dependencies for the server:
    ```sh
    cd ../src
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the  directory and add your MongoDB URI and other environment variables:
    ```env
    MONGO_URI=your_mongo_uri
    DB_NAME=your_db_name
    JWT_SECRET=your_jwt_secret
    HASHING_SALT_ROUNDS=10
    PORT=5000
    ```

### Running the Application

1. Start the server:
    ```sh
    cd ../src
    npm start
    # or
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the client-side application.

### Project Structure

- `src`: Contains the Express.js server-side application.

### API Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login a user.
- `POST /api/role/super-admin`: Register a super admin.
- `POST /api/role/admin`: Register an admin.

### Middleware

- `authMiddleware`: Verifies JWT token.
- `adminMiddleware`: Ensures the user has admin access.
- `superAdminMiddleware`: Ensures the user has super admin access.

### Models

- `User`: Defines the user schema.
- `Course`: Defines the course schema.
- `Subject`: Defines the subject schema.
- `Question`: Defines the question schema.
- `Solution`: Defines the solution schema.

### Controllers

- : Handles user authentication.
- : Handles role-based registration.

### License

This project is licensed under the MIT License.