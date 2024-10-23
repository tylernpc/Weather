async function getUserLocation() {
  let userAddress = document.getElementById("userInputAddress").value;
  let userPostal = document.getElementById("userInputZip").value;
  // 1 | create api string
  let apiString = `https://geocoder.ca/?locate=${userAddress},+${userPostal}&geoit=XML&json=1`;

  // 2 | make connection and wait for response
  let response = await fetch(apiString);
  let jsonData = await response.json();

  // 3 | do stuff with json below
  let latitude = jsonData["latt"];
  let longitude = jsonData["longt"];

  // 4 | pass off info to getWeatherInfo()
  return [latitude, longitude];
}

async function getWeatherInfo() {
  let [latitude, longitude] = await getUserLocation();
  // 1 | create api string
  let apiString = `https://api.weather.gov/points/${latitude},${longitude}`;

  // 2 | make connection and wait for response
  let response = await fetch(apiString);
  let jsonData = await response.json();

  // 3 | do stuff with json below
  let forecastUrl = jsonData.properties.forecast;
  response = await fetch(forecastUrl);
  jsonData = await response.json();
  let temperature = jsonData.properties.periods[0].temperature;
  console.log(temperature);
}