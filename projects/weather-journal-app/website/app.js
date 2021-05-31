/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=b4f9bc96486cca988708b41a0aae131b";
// const weatherAPI = baseURL + zipcode + apiKey;

document.querySelector('#generate').addEventListener('click', getWeather);

async function getWeather() {
  const zipcode = document.querySelector('#zip').value;
  const res = await fetch(baseURL + zipcode + apiKey);

  try {
    const weather = await res.json();
    console.log(weather);
  } catch(error) {
    console.log("error", error);
  }
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();