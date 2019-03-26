class Weather {

  getWeather() {
    return (Math.floor(Math.random() * 10)) <= 3
  }
}

module.exports = Weather;
