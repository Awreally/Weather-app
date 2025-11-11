const p = document.querySelector('.po');
const input = document.querySelector('#input')
const btn = document.querySelector('#btn');
const degree = document.querySelector('#degrees')

const cityList = [
  { name: "Berlin", lat: 52.52, lon: 13.4050 },
  { name: "Stockholm", lat: 59.3294, lon: 18.0686 },
  { name: "Göteborg", lat: 57.7089, lon: 11.9746 },
  { name: "Malmö", lat: 55.6050, lon: 13.0038 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "Seoul", lat: 37.5665, lon: 126.9780 },
  { name: "Prague", lat: 50.0880, lon: 14.4208 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "London", lat: 51.5072, lon: -0.1276 },
  { name: "Rome", lat: 41.9028, lon: 12.4964 },
  { name: "Madrid", lat: 40.4168, lon: -3.7038 },
  { name: "Oslo", lat: 59.9139, lon: 10.7522 },
  { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
  { name: "Helsinki", lat: 60.1699, lon: 24.9384 },
  { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
  { name: "Lisbon", lat: 38.7167, lon: -9.1390 },
  { name: "Vienna", lat: 48.2082, lon: 16.3738 },
  { name: "Warsaw", lat: 52.2297, lon: 21.0122 },
  { name: "Athens", lat: 37.9838, lon: 23.7275 },
  { name: "Reykjavik", lat: 64.1355, lon: -21.8954 }
];


async function getData() {
    const cityName = input.value.trim();
    const city = cityList.find(c => c.name.toLocaleLowerCase() === cityName.toLocaleLowerCase());
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,is_day,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover`;  
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    const temp = data.current.temperature_2m;
    const windSpeed = data.current.wind_speed_10m / 3.6;
    console.log(Math.round(windSpeed));
    p.textContent = temp;

    console.log(temp);
    
    }


    btn.addEventListener('click', getData);
