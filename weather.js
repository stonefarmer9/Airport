class Weather {

  getWeather() {
    var chance = Math.floor(Math.random() * 10)
    return chance <= 3
  }
}

module.exports = Weather;
