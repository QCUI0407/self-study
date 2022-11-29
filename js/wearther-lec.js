let lon, lat;
let currentCity = document.querySelectorAll('.currentCity')
let dateShow = document.querySelectorAll('.dateShow')
let temperature = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let humidity = document.querySelectorAll(".humidity");
let wind = document.querySelectorAll(".wind");
let pressure = document.querySelectorAll(".pressure");
let icon = document.querySelectorAll(".icon");
//----map DOM----
const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")

//------------------------map--------------
function geocode(search, MAPBOX_TOKEN) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + MAPBOX_TOKEN)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}
//Current city weather
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            let web = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + OPEN_WEATHER_APPID + "&units=imperial";
            fetch(web).then(
                (response) => {
                    return response.json();
                }
            ).then((data) => {
                //console.log(data);
                currentCity[0].textContent = "Current city: " + data.city.name;
                let count = 0;
                for (let i = 0; i < 40; i += 8) {
                    dateShow[count].textContent = data.list[i].dt_txt;
                    temperature[count].textContent = data.list[i].main.temp_min + " °F";
                    summary[count].textContent = data.list[i].weather[0].description.toUpperCase();
                    humidity[count].textContent = "Humidity: " + data.list[i].main.humidity + "%";
                    wind[count].textContent = "Wind: " + data.list[i].wind.speed;
                    pressure[count].textContent = "Pressure: " + data.list[i].main.pressure;
                    let iconShow = data.list[i].weather[0].icon;
                    icon[count].innerHTML =
                        `<img src=" http://openweathermap.org/img/wn/${iconShow}.png" style= 'height:5rem'/>`;
                    count++;
                }
                //-------------------------add map-------------------------------------              
                mapboxgl.accessToken = MAPBOX_TOKEN;
                const map = new mapboxgl.Map({
                    container: 'map', // container ID
                    style: 'mapbox://styles/mapbox/streets-v9', // style URL
                    center: [lon, lat],
                    zoom: 10,
                });
                // ---------------------------btn search------------------------------
                $('#search-btn').click(function centerLocationName(e) {
                    e.preventDefault()
                    geocode(searchInput.value, MAPBOX_TOKEN)
                        .then(function (result) {
                            // console.log(result);
                            map.setCenter(result);
                            map.setZoom(9);
                            new mapboxgl.Marker().setLngLat(result).addTo(map);
                        });

                    var cityName = searchInput.value;
// -----------------------------------search city wearther-----------------
                    let web2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + OPEN_WEATHER_APPID + "&units=imperial";
                    fetch(web2).then(
                        (response) => {
                            return response.json();
                        }
                    ).then((data) => {
                        console.log(data);
                        currentCity[0].textContent = "Current city: " + cityName.toUpperCase();
                        let count = 0;
                        for (let i = 0; i < 40; i += 8) {
                            dateShow[count].textContent = data.list[i].dt_txt;
                            temperature[count].textContent = data.list[i].main.temp_min + " °F";
                            summary[count].textContent = data.list[i].weather[0].description.toUpperCase();
                            humidity[count].textContent = "Humidity: " + data.list[i].main.humidity + "%";
                            wind[count].textContent = "Wind: " + data.list[i].wind.speed;
                            pressure[count].textContent = "Pressure: " + data.list[i].main.pressure;
                            let iconShow = data.list[i].weather[0].icon;
                            icon[count].innerHTML =
                                `<img src=" http://openweathermap.org/img/wn/${iconShow}.png" style= 'height:5rem'/>`;
                            count++;
                        }

                    })





                })
            });
        });
    }
})



