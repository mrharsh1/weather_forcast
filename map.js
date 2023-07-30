const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemE1 = document.getElementById('current-weather-item');
const tomezone =  document.getElementById('time-zone');
const countryE1 =  document.getElementById('country');
const weatherForecastE1 =  document.getElementById('weather-forecast');
const currentTempE1 =  document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'july', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]

// const API_KEY = '470f3ec624e0c0dfdb6971c87edb0b6b'

const API_KEY = 'd285921942c4450585682818230607'

setInterval(() =>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hourIn12HrFormat = hour >= 13 ? hour%12: hour
    const mintues = time.getMinutes();
    const ampm = hour  >= 12 ? 'PM' : 'AM'

    timeE1.innerHTML = hourIn12HrFormat + ':' + mintues+ '' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ',' + date + ' ' + months[month]
}, 1000);

function getWeatherDate(){
    navigator.geolocation.getCurrentPosition((success) =>{
        console.log(success);
        let {latitude, longitude} = success.coords;
        console.log('latitude', latitude);
        console.log('longitude', longitude);
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=d285921942c4450585682818230607&q=India&days=1&aqi=no&alerts=no`).then(res => res.json()).then(data =>{
            console.log(data,"nhjdisahidh");
            showWeatherData(data);
        })
       
    })

}
getWeatherDate()

function showWeatherData(data) {
    let{humidity, pressure_in, wind_kph, sunrise, sunset, condition} = data.current;

    currentWeatherItemE1.innerHTML = `
    
    <div class="weather-item">
    <div>${condition.text}</div>
    <div><img src="${condition.icon}" alt=""></div>
    </div>
    <div class="weather-item">
    
    
    <div>Humidity</div>
    <div>${humidity}</div>
    </div>
    <div class="weather-item">
    <div>pressure</div>
    <div>${pressure_in}</div>
    </div>
    <div class="weather-item">
    <div>wind speed </div>
    <div>${wind_kph}</div>
    </div>

    <div class="weather-item">
    <div>sunrise </div>
    <div>${wind_kph}</div>
    </div>

   
    
    `
    
    
    
    ;
}


