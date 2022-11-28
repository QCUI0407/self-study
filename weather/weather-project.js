// Declaring the variables
let lon, lat;
let temperature = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let humidity = document.querySelectorAll(".humidity");
let wind = document.querySelectorAll(".wind");
let pressure = document.querySelectorAll(".pressure");
let icon = document.querySelectorAll(".icon");
window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            console.log(lon);
            lat = position.coords.latitude;
            const api = "1d1f75509a4a8cfc3fc56162802f7b91";
            // let weatherKey = "4acd13639e59f07ee186e9442ac22b7b";
            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;
            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    for (let i = 0; i < 5; i++) {
                        temperature[i].textContent = data.daily[i].temp.day + " °F";
                        summary[i].textContent = data.daily[i].weather[0].description.toUpperCase();
                        humidity[i].textContent = "Humidity: " + data.daily[i].humidity +"%";
                        wind[i].textContent = "Wind: " + data.daily[i].wind_speed;
                        pressure[i].textContent = "Pressure: "+ data.daily[i].pressure;
                        let icon1 = data.daily[i].weather[0].icon;
                        icon[i].innerHTML =
                            `<img src=" http://openweathermap.org/img/wn/${icon1}.png" style= 'height:5rem'/>`;
                    }
                })
        })
    }
});
// map
