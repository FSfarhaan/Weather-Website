const apiKey = "50977b5ae7d4544fa2fabd537b49c328";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.getElementById('btn').addEventListener("click", ()=>{
    dispWeather(document.querySelector('.search input').value);
});


async function dispWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmPh";
}
