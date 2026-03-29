// const baseUrl="https://api.api-ninjas.com/v1/city?name=";
const baseUrl="http://api.openweathermap.org/geo/1.0/direct?q="
const weatherBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
const api="e5c5d860dca21b93fe4017e21cd76d04"
// const api="Hi5NGOffLUI6o0OELb6ykE5ZpGsSFDfv2GrSJ847";
// const latlonbaseUrl="http://api.openweathermap.org/geo/1.0/direct?q=Delhi,IN&limit=1&appid=YOUR_API_KEY"
let input=document.querySelector("#input");
let three=document.querySelector("#three");
let btn=document.querySelector("#btn");
let city=document.querySelector("#city");
let lat=document.querySelector("#lat");
let lon=document.querySelector("#lon");
let w=document.querySelector("#w");

btn.addEventListener("click",async () =>{
  const Url=`${baseUrl}${input.value},IN&limit=1&appid=${api}`;
  let response=await fetch(Url,{
      method: "GET",
      // headers: {
      //   "X-Api-Key": api
      // }
      });
  let data=await response.json();
  // console.log(data);
  city.innerText=data[0].name;
  lat.innerText=data[0].lat;
  lon.innerText=data[0].lon;
// const { name, lat, lon } = data[0];

//     city.innerText = name;
//     lat.innerText = lat;
//     lon.innerText = lon;

    // 2️⃣ Get weather using lat & lon
    const weatherUrl = `${weatherBaseUrl}?lat=${lat.innerText}&lon=${lon.innerText}&units=metric&appid=${api}`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    // 3️⃣ Show weather
    w.innerHTML = `
      🌡 Temperature: ${weatherData.main.temp} °C <br>
      💧 Humidity: ${weatherData.main.humidity}% <br>
      🌥 Weather: ${weatherData.weather[0].description} <br>
      💨 Wind Speed: ${weatherData.wind.speed} m/s`;
  })
