var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "5174af39910cf42d1994bcef41897c2c";
function convertion(val)
{
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue.value +'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`Weather in <span>${ nameval}</span>`
        temp.innerHTML=`Temperature: <span>${ convertion(temperature)} C</span>`
        description.innerHTML = `Sky Condition: <span>${descrip}</span>`
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`
    })

    .catch(err => alert(' you entered wrong city name'))
});