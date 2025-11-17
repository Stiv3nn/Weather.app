// CHIAVE API
const apiKey = "9d2792481e5495acb7fb660801c44533";
// URL DELLA CHIAVE API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?uniits=metric&q=";

// QUANDO SI CLICCA IL BTN DI RICERCA, DOVREBBE INVIARE LE INFORMAZIONI SULLA CITTA' NELLA FUNZIONE DI CONTROLLO DEL METEO
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// VARIABILE PER L'AGGIORNAMENTO DELL'IMMAGINE
const weatherIcon = document.querySelector(".weather-icon");

// FUNZIONE ASINCRONA CON IL NOME CHECKWEATHER
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // CONTROLLARE IL CODICE DI RISPOSTA
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        const data = await response.json();

        // console.log(data);

        // VISUALIZZARE I PARAEMTRI NECESSARI SU HTML TRAMITE I DATI PRESI DALLA CHIAMATA ASYNC SOPRA INDICATA
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // ARROTONDARE I GRADI
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // AGGIORNARE L'IMMAGINE METEO
        if (data.weather[0].main == "Clouds") {
            // AGGIORNA IL FILE SORGENTE
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        // QUANDO INSERISCO NELL'INPUT DELLA RICERCA UN NOME DI UNA CITTA' APPARE LA TENDINA CON LE INFO 
        document.querySelector(".weather").style.display = "block";

        document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // AVRA' LE INFORMAZIONI SULLA CITTA' SCRITTA NEL INPUT
})

// PER CHIAMARE LA FUNZIONE ASINCRONA SOPRA INDICATA, BISOGNA CHIAMARLA FUORI DALLE GRAFFE, COME MOSTRATO QUA
// checkWeather();