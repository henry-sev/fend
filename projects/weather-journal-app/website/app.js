/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=b4f9bc96486cca988708b41a0aae131b";

document.querySelector('#generate').addEventListener('click', generateJournal);

function generateJournal() {
  const zipcode = document.querySelector('#zip').value;
  const feelings = document.querySelector('#feelings').value;

  // Create a new date instance dynamically with JS
  let d = new Date();
  let month = d.getMonth() + 1;
  let newDate = month +'.'+ d.getDate()+'.'+ d.getFullYear();

  fetch(baseURL + zipcode + apiKey)
    .then(res => res.json())
    .then(data => {
      postData('/addJournal', {date: newDate, temp: data.main.temp, content: feelings});
      updateUI();
    })
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
    const recentJournal = (await res.json()).slice(-1);

    document.querySelector('#date').innerHTML = "Date: " +  recentJournal[0].date;
    document.querySelector('#temp').innerHTML = "Temperature: " + recentJournal[0].temp + ' K' ;
    document.querySelector('#content').innerHTML = "Feelings: " + recentJournal[0].content;
  } catch(error) {
    console.log('error', error);
  }
}
