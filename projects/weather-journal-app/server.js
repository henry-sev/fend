// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port  = 8000;
app.listen(port, () => {
  console.log(`Server is running on localhost: ${port}`);
})

const weatherData = [];
app.get('/all', (req, res) => {
  res.send(projectData);
})

app.post('/addJournal', (req, res) => {
  const newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content,
  }
  weatherData.push(newEntry);
  projectData = newEntry;
  res.send(weatherData);
})