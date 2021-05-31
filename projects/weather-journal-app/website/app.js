/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=b4f9bc96486cca988708b41a0aae131b&units=metric";

document.querySelector('#generate').addEventListener('click', generateJournal);

function generateJournal() {
  const zipcode = document.querySelector('#zip').value;
  const feelings = document.querySelector('#feelings').value;

  // Create a new date instance dynamically with JS
  let d = new Date();
  let month = d.getMonth() + 1;
  let newDate = month +'.'+ d.getDate()+'.'+ d.getFullYear();

  zipcode 
  ? fetch(baseURL + zipcode + apiKey)
      .then(res => res.json())
      .then(data => {
        postData('/addJournal', {date: newDate, temp: data.main.temp, content: feelings});
        updateUI();
      })
  : alert("Invalid zipcode")
}

const postData = async (url = '', data = {}) => {
  const res = await fetch (url, {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

const updateUI = async () => {
  const res = await fetch ('/all');

  try {
    const recentJournal = await res.json();

    document.querySelector('#date').innerHTML = "Date: " +  recentJournal.date;
    document.querySelector('#temp').innerHTML = "Temperature: " + recentJournal.temp + ' &#8451' ;
    document.querySelector('#content').innerHTML = "Feelings: " + recentJournal.content;
  } catch(error) {
    console.log('error', error);
  }
}
