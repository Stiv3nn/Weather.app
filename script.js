// CHIAVE API
const apiKey = "9d2792481e5495acb7fb660801c44533";
// URL DELLA CHIAVE API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?uniits=metric&q=";

// FUNZIONE ASINCRONA CON IL NOME CHECKWEATHER
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    // VISUALIZZARE I PARAEMTRI NECESSARI SU HTML TRAMITE I DATI PRESI DALLA CHIAMATA ASYNC SOPRA INDICATA
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // ARROTONDARE I GRADI
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


}

// PER CHIAMARE LA FUNZIONE ASINCRONA SOPRA INDICATA, BISOGNA CHIAMARLA FUORI DALLE GRAFFE, COME MOSTRATO QUA
checkWeather();