// CHIAVE API
const apiKey = "9d2792481e5495acb7fb660801c44533";
// URL DELLA CHIAVE API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?uniits=metric&q=roma";

// FUNZIONE ASINCRONA CON IL NOME CHECKWEATHER
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
}

// PER CHIAMARE LA FUNZIONE ASINCRONA SOPRA INDICATA, BISOGNA CHIAMARLA FUORI DALLE GRAFFE, COME MOSTRATO QUA
checkWeather();