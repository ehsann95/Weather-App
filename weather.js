class Weather {
    constructor(city) {
        this.key = '2fc69a049225434e8ad161147190704';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.key}&q=${this.city}`);

        const resData = await response.json();
        return resData;
    }

    changeLocation(city) {
        this.city = city;
    }
}