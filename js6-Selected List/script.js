let countries = ["Azerbaijan", "Turkey", "England", "USA", "Germany"];
let cities = [
    ["Baku", "Ganja", "Sumgait"],
    ["Istanbul", "Ankara", "Izmir", "Adana"],
    ["London", "Liverpool", "Manchester", "Cambridge"],
    ["NewYork", "Manhatten"],
    ["Berlin", "Frankfurt", "Munich"]
]

let country = document.getElementById("country");
let city = document.getElementById("city");


onload = function() {
    let option = `<option selected disabled>Choose your Country</option>`;
    for (let i = 0; i < countries.length; i++) {
        option += `<option value="${i}">${countries[i]}</option>`;

    }
    country.innerHTML = option;
}


city.onchange = function() {
    let option2 = `<option selected disabled>Choose your City</option>`;
    for (let j = 0; j < cities.length; j++) {
        option2 += `<option value="${j}">${cities[i][j]}</option>`;

    }
    city.innerHTML = option2;
}