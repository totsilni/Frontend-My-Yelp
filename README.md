# my_yelp

my_yelp is a web application built using React and Firebase, allowing users to manage restaurant entries. Users can add new restaurants with details such as name, description, and city, and view the list of restaurants in a table format.

## Features

- User authentication using Firebase Authentication for sign in and sign out functionality.
- Real-time database powered by Firebase Realtime Database to store and manage restaurant data.
- Displaying restaurants in a table with fixed row height and scrollable overflow for a consistent and user-friendly interface.
- Adding new restaurants with basic details including name, description, and city.

## Technologies Used

- React.js
- Firebase (Firebase Authentication, Firebase Realtime Database)
- Tailwind CSS

## Getting Started

### Prerequisites

Before getting started, make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/totsilni/my_yelp.git
   ```

2. Navigate into the project directory:
   ```bash
   cd my_yelp
   ```
3. Install the dependencies using npm:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Configuration

1. Set up a Firebase project and enable Firebase Authentication and Firebase Realtime Database.
2. Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.) from the Firebase console.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open http://localhost:5173 in your web browser to view the application.

### Usage

Sign in with your Firebase Authentication credentials to access the application.
Use the input fields to add new restaurants with name, description, and city.
View and manage the list of restaurants displayed in a table format.
## Contributing

If you would like to contribute to this project, please fork the repository and create a new branch for your changes.
