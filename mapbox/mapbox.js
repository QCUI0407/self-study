mapboxgl.accessToken = MAPBOX_KEY;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.796988, 32.776664],
    zoom: 10
});



// code from the next step will go here!
const geojson = {
    type: 'Restaurants',
    Restaurants: [
        {
            type: 'Restaurant',
            geometry: {
                type: 'Point',
                coordinates: [-96.68491069617365, 32.918543027606276]
            },
            properties: {
                title: 'Restaurant Name',
                description: 'Garden Restaurant'
            }
        },
        {
            type: 'Restaurant',
            geometry: {
                type: 'Point',
                coordinates: [-96.8366411227291, 32.77786996680226]
            },
            properties: {
                title: 'Restaurant Name',
                description: 'TEN Ramen'
            }
        },
        {
            type: 'Restaurant',
            geometry: {
                type: 'Point',
                coordinates: [-96.9000170940765, 32.903395925505514]
            },
            properties: {
                title: 'Restaurant Name',
                description: 'Doma Seolleongtang'
            }
        }
    ]
};
// add markers to map
for (const Restaurant of geojson.Restaurants) {
    // create a HTML element for each Restaurant
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each Restaurant and add to the map
    new mapboxgl.Marker(el).setLngLat(Restaurant.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
                `<h3>${Restaurant.properties.title}</h3><p>${Restaurant.properties.description}</p>`
            )
    ).addTo(map);
}

//zoom
document.getElementById('zoom').addEventListener('change', (e) => {
    let zoomNum = e.target.value;
    map.zoomTo(zoomNum, { duration: 9000 });
});
//center map

// document.getElementById('search').addEventListener('click',function(){
//     let v = document.getElementById('address').value;
//     geocode(v, MAPBOX_KEY).then(function (coordinates) {
//         var popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// })

//hide marker
$('#hideM').click(function(){
    let markers = document.getElementsByClassName("marker");
    for (let i = 0; i < markers.length; i++) {
        markers[i].style.visibility = "hidden";
    }
})



