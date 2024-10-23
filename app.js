async function getWeatherInfo() {
    let apiString = `https://api.weather.gov/points/${lat},${lon}`;
    let response = await fetch(apiString);
    let jsonData = await response.json();

    // do stuff with json below

    // 
}

function getUserLocation() {
    return document.getElementById('userInputLocation').value;
}


