# Enhanced Authentication API

## Overview
This project aims to enhance the existing backend API for an authentication system by adding a new feature that allows users to set their profiles as public or private. Additionally, it implements functionality to enable admin users to view both public and private user profiles, while normal users can only access public profiles. The backend is built using Node.js, and Express.js is used for routing.

## User Stories
- Users can register a new account.
- Users can log in.
- Users can log in or register with at least one of the following services: Google, Facebook, Twitter, or GitHub.
- Users can sign out.
- Users can see their profile details.
- Users can edit their details, including photo, name, bio, phone, email, and password.
- Users can upload a new photo or provide an image URL.
- Users can choose to make their profile public or private.
- Admin users can see both public and private user profiles.
- Normal users can only see public user profiles.

## Requirements
- Node.js is used for the backend.
- Enhance the existing authentication system to include the option for users to set their profiles as public or private.
- Implement authorization checks to allow admin users to access both public and private profiles.
- Normal users should only be able to access public profiles.
- Ensure that private user details remain private to unauthorized users.
- Include endpoints for listing public profiles and retrieving user profiles based on user roles.
- Update the user profile editing functionality to include the option to set the profile as public or private.
- Implement proper error handling, validation, and security measures.
- Optionally, host the API on a platform like Heroku or similar.
- Optionally, use a library like Swagger to create an API playground for testing the API.

## Running Locally
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Set up environment variables as needed (e.g., database connection string, ).
5. Start the server by running `npm start`.
6. Access the API endpoints using tools like Postman or cURL.

## Why Session-based Authentication?
Session-based authentication is chosen over token-based authentication for its simplicity and ease of implementation, especially for web applications where sessions are a natural fit. Sessions allow the server to store user authentication information on the server side, eliminating the need to manage tokens on the client side. Additionally, sessions can provide better security, as session tokens are less prone to certain types of attacks like XSS and CSRF.

## Why Argon2 over bcrypt Library?
Argon2 is chosen over the bcrypt library for password hashing due to its stronger security properties and resistance to emerging threats like GPU-based attacks. Argon2 is considered the state-of-the-art in password hashing algorithms and is recommended by leading security experts. It offers better protection against brute-force attacks and provides options for tuning the hashing parameters based on resource constraints.

## Deployed Routes

### Base Route
The base route for the deployed API can be accessed at:
[https://voosh-bg1e.onrender.com](https://voosh-bg1e.onrender.com)

### Swagger Docs Route
Swagger documentation for the API can be accessed at:
[https://voosh-bg1e.onrender.com/api-docs/](https://voosh-bg1e.onrender.com/api-docs/)
