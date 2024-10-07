# ForkMyRecipe

**ForkMyRecipe** is a web application that allows users to copy ("fork") existing recipes, make their own custom modifications, and save them to their profiles. Inspired by GitHub's fork and version control system, this app offers a collaborative space for cooking enthusiasts to share, modify, and personalize recipes.

## Features

- **Recipe Forking**: Users can copy recipes to their profiles and make adjustments to ingredients, instructions, or portions.
- **Version Control**: Track the history of recipe modifications, allowing users to view and revert to previous versions.
- **Collaborative Recipe Creation**: Propose changes to community recipes, share tips, and suggest improvements.
- **User Profiles**: Each user has a profile where they can view, edit, and manage their customized recipes.

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose for schema-based models)
- **Authentication**: Firebase or Passport.js
- **Version Control for Recipes**: MongoDB stores different versions of each recipe, linking back to original versions.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or use MongoDB Atlas for cloud-based storage)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/ForkMyRecipe.git
   ```

## Navigate into the Project Directory:

    cd ForkMyRecipe

## Frontend Setup Using Vite:

### Install Vite and set up React:

    npm create vite@latest Frontend
    cd Frontend
    npm install

## Backend Setup:

### In a separate directory for the backend, install the necessary packages:

    mkdir backend
    cd backend
    npm init -y
    npm install express mongoose cors

## Set Up the Environment Variables:

### Create a .env file in the backend directory and add your MongoDB connection string and any other relevant environment variables:

    MONGO_URI=<Your MongoDB URI>
    PORT=5000

## Run the Application:

### Frontend (Vite/React):

    cd Frontend
    npm run dev

### Backend (Node/Express): In a separate terminal window:

    cd Backend
    npm run server

## Access the App:

    Visit http://localhost:3000 to access the app in your browser.

## Folder Structure

    ForkMyRecipe/
    ├── Frontend/              # Vite/React frontend code
    ├── Backend/               # Node.js and Express backend
    ├── models/                # MongoDB models (e.g., Recipe, User)
    ├── routes/                # API routes
    ├── .env                   # Environment variables
    ├── README.md              # Project documentation
    └── package.json           # Project dependencies

## Happy Cooking! 🍲🍴
