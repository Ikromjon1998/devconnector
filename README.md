# MERN Stack Application

A MERN stack application with a backend built using Node.js, Express.js, MongoDB, and Passport.js for authentication. This application includes user authentication, post management, and profile handling.

---

## Features

- **User Authentication**: 
  - User registration with encrypted passwords.
  - User login with JSON Web Token (JWT) authentication.
  - Retrieve current user details (protected route).

- **Post Management**: 
  - Add, delete, and manage user posts.

- **Profile Management**: 
  - Create and manage user profiles.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ikromjon1998/devconnector.git
   ```

2. Navigate to the project directory:
   ```bash
   cd devconnector
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Copy the `.env.example` file to `.env` in the root directory and replace the placeholder values with your actual values:
   ```env
   MONGO_URI=mongodb+srv://<DATABASE_USER_NAME>:<password>@devconnector.0kdup.mongodb.net/?retryWrites=true&w=majority&appName=devconnector
   SECRET_OR_KEY=secret
   ```

5. Start the server:
   ```bash
   npm run start
   ```

6. Open your browser or API testing tool and use the API routes.

---

## Live Demo

This application is deployed and available for testing here: [DevConnector Backend Application](https://devconnector-9te5.onrender.com/)

**Notes**:
- **Testing Access**: No IP restrictions are applied, so anyone can test the application and explore its features. Feel free to test user authentication, post management, and profile creation functionalities.
- **Free Instance Spin-Down**: This application is hosted on a free instance of Render. If the instance has been inactive, it may take **up to 50 seconds** to spin up when you first access the URL.

---

## Contributing

Contributions to this project are highly encouraged! If you find any bugs, have suggestions for improvement, or wish to add new features, feel free to open a Pull Request (PR).

### How to Contribute
1. **Fork the Repository**: Create your own copy of the project.
2. **Make Changes**: Add your feature or fix issues in a new branch.
3. **Submit a PR**: Once done, submit a PR for review.

### Continuous Deployment
When a PR is merged into the `main` branch:
- The updates are automatically deployed to the live application at [https://devconnector-9te5.onrender.com/](https://devconnector-9te5.onrender.com/), making your changes immediately available for testing.

---

## API Routes

### Users Routes

1. **Test Route**
    - `GET /api/users/test`
    - **Description**: Test the users route.
    - **Access**: Public

2. **Register User**
    - `POST /api/users/register`
    - **Description**: Register a new user.
    - **Access**: Public
    - **Body**:
      ```json
      {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "yourpassword",
        "password_confirmation": "yourpassword"
      }
      ```

3. **Login User**
    - `POST /api/users/login`
    - **Description**: Login and return a JWT token.
    - **Access**: Public
    - **Body**:
      ```json
      {
        "email": "johndoe@example.com",
        "password": "yourpassword"
      }
      ```

4. **Get Current User**
    - `GET /api/users/current`
    - **Description**: Get the current logged-in user (protected route).
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`

---

### Posts Routes

1. **Test Route**
    - `GET /api/posts/test`
    - **Description**: Test the posts route.
    - **Access**: Public

2. **Create a Post**
    - `POST /api/posts`
    - **Description**: Create a new post.
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`
    - **Body**:
      ```json
      {
        "text": "This is a post text"
      }
      ```

3. **Delete a Post**
    - `DELETE /api/posts/:id`
    - **Description**: Delete a post by ID.
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`

---

### Profiles Routes

1. **Test Route**
    - `GET /api/profile/test`
    - **Description**: Test the profile route.
    - **Access**: Public

2. **Get Current User Profile**
    - `GET /api/profile`
    - **Description**: Get the profile of the logged-in user.
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`

3. **Create or Update Profile**
    - `POST /api/profile`
    - **Description**: Create or update the user profile.
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`
    - **Body**:
      ```json
      {
        "bio": "This is a bio",
        "location": "City, Country"
      }
      ```

4. **Delete Profile**
    - `DELETE /api/profile`
    - **Description**: Delete the user profile and account.
    - **Access**: Private
    - **Headers**: `Authorization: Bearer <token>`

---

## Project Structure

```
project-root/
│
├── config/
│   ├── keys.js          # Environment variable configuration
│   ├── passport.js      # Passport configuration
│
├── models/
│   ├── User.js          # User model
│   ├── Post.js          # Post model
│   └── Profile.js       # Profile model
│
├── routes/
│   ├── api/
│   │   ├── users.js     # User routes
│   │   ├── posts.js     # Post routes
│   │   └── profiles.js  # Profile routes
│
├── validation/
│   ├── education.js     # Education validation
│   ├── experience.js    # Experience validation
│   ├── is-empty.js      # Check if input is empty
│   ├── login.js         # Login validation
│   ├── post.js          # Post validation
│   ├── profile.js       # Profile validation
│   └── register.js      # Register validation
│
├── server.js            # Main server file
├── .env                 # Environment variables
└── README.md            # Documentation
```

---

## Dependencies

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport](http://www.passportjs.org/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Gravatar](https://gravatar.com/)
- [Body-parser](https://github.com/expressjs/body-parser)

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Contribution

Feel free to contribute to the project by submitting issues or pull requests.

---

## Author

**Ikromjon Ochilov**

Connect with me on [LinkedIn](https://www.linkedin.com/in/ikromjon-ochilov-045560182).
