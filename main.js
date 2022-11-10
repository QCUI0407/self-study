"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // alert("sss")
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffees = [
    {name: 'Light City', roast: 'light'},
    {name: 'Half City', roast: 'light'},
    {name: 'Cinnamon', roast: 'light'},
    {name: 'City', roast: 'medium'},
    {name: 'American', roast: 'medium'},
    {name: 'Breakfast', roast: 'medium'},
    {name: 'High', roast: 'dark'},
    {name: 'Continental', roast: 'dark'},
    {name: 'New Orleans', roast: 'dark'},
    {name: 'European', roast: 'dark'},
    {name: 'Espresso', roast: 'dark'},
    {name: 'Viennese', roast: 'dark'},
    {name: 'Italian', roast: 'dark'},
    {name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let newCoffee = document.getElementById('new-coffee');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
newCoffee.addEventListener('keyup',updateCoffees)

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];