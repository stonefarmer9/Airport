class Weather {

  getWeather() {
    var chance = Math.floor(Math.random() * 10)
    if (chance <= 3) { return true } else { return false }
  }
}

module.exports = Weather;
