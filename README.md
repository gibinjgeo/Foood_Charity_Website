
# Food Donation Management System

This is a web-based platform that facilitates food donations by individuals or institutions. Users can register, log in, and donate food, while admins can manage donations and view statuses. The system integrates Firebase for database management and authentication.

## Features

- **User Registration and Login**: Users can create accounts and log in using Firebase authentication.
- **Donation Management**: Users can donate food by filling in donation details, such as the type of food, quantity, and expiry date.
- **Update and Delete Donations**: Users can update or delete their donations, with data being stored in Firebase.
- **Donation Status**: Users can check the status of their donations.
- **Firebase Integration**: The platform uses Firebase for authentication and real-time database operations.
- **Responsive Design**: The website is responsive and built with Bootstrap for mobile and desktop views.

## Project Structure

- **index.html**: Home page where users can view information about the project and navigate to other sections.
- **login.html**: User login page for individual users and institutions.
- **register.html**: Form for users to register and submit food donations.
- **donate.html**: Main page where users can initiate the donation process.
- **donationstatus.html**: Page to check the status of donations.
- **updl1.html**: Page for updating and deleting donations.
- **tac.html**: Terms and conditions of the platform.
- **donors.html**: List of available donors.
- **CSS & JS Files**: Supporting files for styling and functionality (`donate.css`, `signupd.css`, etc.).

## Firebase Configuration

The application integrates with Firebase for:
- **Authentication**: User registration and login via Firebase Authentication.
- **Database**: Real-time donation data is stored in Firebase Realtime Database.

### Firebase Configuration (in your HTML/JS files):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

How to Run

Clone the repository:


git clone https://github.com/yourusername/yourproject.git

Install Dependencies: Make sure you have a working local server (e.g., XAMPP, WAMP, or use a simple Python server):


python -m http.server

Set Up Firebase:
    Create a Firebase project at Firebase Console.
    Replace the Firebase configuration object in the JavaScript files with your own Firebase project settings.

Run the Application:
    Open index.html in your browser to start the application.

Technologies Used

    HTML/CSS: For structure and design of the web pages.
    Bootstrap: For responsive design and layout.
    JavaScript: For form validation, authentication, and database operations.
    Firebase: Used for authentication and real-time database management.


