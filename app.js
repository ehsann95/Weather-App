const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);

const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-changeBtn').addEventListener('click', (e)=> {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    storage.setLocationData(city);

    getWeather();

    $('#locModal').modal('hide');
});

function getWeather(e) {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    });
}