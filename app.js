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
  getUserLocation();
  // 1 | create api string
  let apiString = `https://api.weather.gov/points/${latitude},${longitude}`;

  // 2 | make connection and wait for response
  let response = await fetch(apiString);
  let jsonData = await response.json();

  // 3 | do stuff with json below
  document.getElementById("myTemp").innerHTML +=
    jsonData.properties.periods[i].temperature +
    " degrees Farenheit" +
    "<br><br>";
  //
}

// // 40.81084153320897, -96.69021919814986 | DONT PANIC LABS COORDS

// // https://geocoder.ca/?locate=1221+n44th+st,+68503&geoit=XML&json=1
