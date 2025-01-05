# Facebook Clone (MERN Stack)

## Overview
This is a full-stack Facebook clone built using the MERN (MongoDB, Express, React, Node.js) stack. The application includes features such as user authentication, profile management, posting updates, likes, comments, and a news feed to simulate the core functionalities of Facebook.

## Features
- **User Authentication**: Secure login and registration with JWT-based authentication.
- **Profile Management**: Users can update their profile information and upload profile pictures.
- **News Feed**: Display posts from all users.
- **Post Creation**: Users can create, edit, and delete posts.
- **Likes and Comments**: Engage with posts through likes and comments.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack
- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Token)
- **File Uploads**: Cloudinary (for image hosting)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud-based instance)
- npm or yarn

### Steps to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/satyamx33/facebook-clone.git
   cd facebook-clone
   ```

2. **Install dependencies:**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     CLOUDINARY_NAME=your-cloudinary-name
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret
     ```

4. **Start the application:**
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.



## APIs

### User Routes
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login user and receive token

### Post Routes
- **GET /api/posts** - Fetch all posts
- **POST /api/posts** - Create a new post
- **PUT /api/posts/:id** - Update a post
- **DELETE /api/posts/:id** - Delete a post

### Comment Routes
- **POST /api/comments** - Add a comment to a post
- **DELETE /api/comments/:id** - Delete a comment

## Deployment
- **Frontend**: Hosted on [Vercel](https://vercel.com/)
- **Backend**: Hosted on [Render](https://render.com/) or [Heroku](https://heroku.com/)
- **Database**: MongoDB Atlas

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express Documentation](https://expressjs.com/)

---

Enjoy building with MERN!
