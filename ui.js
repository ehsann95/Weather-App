class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.feelsLike = document.getElementById('w-feels_like');
    }

    paint(weather) {
        this.location.textContent = weather.location.name +', ' + weather.location.country;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = weather.current.temp_c + ' °C';
        this.icon.setAttribute('src', 'http:' + weather.current.condition.icon);
        this.humidity.textContent = `Humidity : ${weather.current.humidity}%`;
        this.wind.textContent = `Wind Direction : ${weather.current.wind_dir}`;
        this.feelsLike.textContent = `Feels Like : ${weather.current.feelslike_c} °C`;
        
    }
}
