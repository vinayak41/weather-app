const weatherIconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temprature-value");
const descElement = document.querySelector(".temprature-description");
const locationElement = document.querySelector(".location");
const inputElement = document.querySelector("input");
const button = document.querySelector("button");

const weather = {

}

fetchData()

function fetchData(cityName = "mumbai") {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b1f48ab458b26aec43aa1b81c9885ffe`).then((response) => response.json()).then((data) => {
        weather.temp = Math.floor(data.main.temp);
        weather.coord = data.coord;
        weather.desc = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.country = data.sys.country;
        weather.city = data.name;
    }).then(() => displayWeather());
}




function displayWeather() {
    weatherIconElement.innerHTML = `<img src="./icons/${weather.iconId}.png" alt="wheather-icon">`;
    tempElement.innerHTML = `<p>${weather.temp}&nbsp;&#8451;</p>`;
    descElement.innerHTML = `<p>${weather.desc}</p>`
    locationElement.innerHTML = `<p>${weather.city}, &nbsp;${weather.country}</p>`
}

button.addEventListener('click', () => {
    const city = inputElement.value;
    fetchData(city);
    displayWeather();
});