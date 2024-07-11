const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase
const serviceAccount = require('./firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function testFirestore() {
  try {
    const docRef = db.collection('test').add({
      testField: 'testValue'
    });
    console.log('Document written with ID: ', (await docRef).id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

testFirestore();




const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  try {
    await db.collection('messages').add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).send('Message submitted successfully!');
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).send('Error submitting message.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
