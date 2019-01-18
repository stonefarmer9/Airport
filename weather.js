class Weather {

  getWeather() {
    var chance = Math.random().floor * 10
    if (chance <= 3) { return true } else { return false }
  }
}

module.exports = Weather;
