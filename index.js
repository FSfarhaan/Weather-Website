const apiKey = "50977b5ae7d4544fa2fabd537b49c328";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Getting the search button;
let btn = document.getElementById('btn');

//On clicking the search button; the value of the input field should be stored in a variable and passed onto the function dispWeather() as a name of the city;
btn.addEventListener('click', ()=>{
    let inputVal = document.querySelector('.search input').value;
    dispWeather(inputVal);
})

//Getting the details via API
async function dispWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    //Displaying the temperature of the city
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";

    //Displaying the name of the city
    document.querySelector(".city").innerHTML = data.name;

    //Displaying the humidity of the city
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
    //Displaying the widn speed of the city
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmPh";
}
