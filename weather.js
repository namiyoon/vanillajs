const KEY_API = "7a7ab86a4b42150f4d229c20cffae9bb"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY_API}&units=metric`
    fetch(url)
        .then(respose => respose.json())
        .then(data => {
            const cloudy = document.querySelector("#weather .cloudy");
            const city = document.querySelector("#weather .city")
            city.innerText = `${data.name} / ${ parseInt(data.main.temp) }`;
            cloudy.innerText = data.weather[0].main;

        })
}

function onGeoError() {
    alert("Can't find the location, No weather information is available")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);