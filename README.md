# Express-FireBase-App

Express-Firebase App
This is a Node.js Express application that uses Firebase Firestore as the database. The application allows users to fill out a form and, upon submission, store the data in Firestore.

Project Structure
Express-firebase-app/
├── public/
│   ├── index.html
│   └── styles.css
├── firebaseServiceAccountKey.json
├── index.js
├── package.json
└── README.md


Prerequisites
Node.js and npm
Firebase account
Heroku account (for deployment)


Setup
1. Clone the Repository
git clone https://github.com/MadhavKumar10/Express-FireBase-App.git
cd express-firebase-app

3. Install Dependencies
npm install

5. Set Up Firebase
--Go to the Firebase Console.
--Create a new project (or use an existing one).
--Navigate to "Project settings" and select "Service accounts".
--Generate a new private key and download the firebaseServiceAccountKey.json file.
--Place the firebaseServiceAccountKey.json file in the root directory of your project.

7. Update Firestore Rules (for development)
Go to Firestore Database -> Rules in the Firebase Console and temporarily set the rules to allow read and write access:
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

Running the Application
1. Start the Server
node index.js

3. Open the Application
Open your browser and go to http://localhost:3000.

Deploying to Heroku
1. Install the Heroku CLI
Follow the instructions to install the Heroku CLI: Heroku CLI Installation.

3. Log in to Heroku
heroku login

5. Create a New Heroku App
heroku create

7. Deploy Your Code
git add .
git commit -m "Initial commit"
git push heroku master

9. Open Your Deployed App
heroku open

File Descriptions
index.js: Main server file where the Express application is set up and Firestore is configured.
public/index.html: HTML file that contains the form for user input.
public/styles.css: CSS file for styling the form.
firebaseServiceAccountKey.json: Service account key file for Firebase (not included in the repository for security reasons).

License
This project is licensed under the MIT License.

Feel free to modify this README as necessary for your specific project details and deployment instructions.







