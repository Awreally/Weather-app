const p = document.querySelector('.po');
const input = document.querySelector('#input')
const btn = document.querySelector('#btn');


const cityList = [
    { name: "Berlin", lat:52.52, lon:13.419998 },
    { name: "Stockholm", lat:59.3294, lon:18.0687 },
    { name: "Tokyo", lat:35.6895, lon:139.6917 },
    { name: "Seoul", lat:37.566, lon:126.9784 },
    { name: "Prague", lat:50.088, lon:14.4208 },
    // { name: "", lat:−33.8678, lon:151.2073 },
    // { name: "", lat: lon:},
    // { name: "", lat: lon:},
    // { name: "", lat: lon:},
];


async function getData() {
    const cityName = input.value.trim();
    const city = cityList.find(c => c.name.toLocaleLowerCase() === cityName.toLocaleLowerCase());
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,is_day,precipitation,wind_speed_10m,wind_direction_10m,cloud_cover`;  
    const res = await fetch(url);
    const data = await res.json();
    
    const temp = data.current.temperature_2m;
    p.textContent = temp;

    console.log(temp);
    
    }

    btn.addEventListener('click', getData);
// data.current.temperature_2m
