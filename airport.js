const Weather = require('./weather')

class Airport {

  constructor(name, capacity = 1, weather = new Weather) {
    this.name = name;
    this.hangar = [];
    this.capacity = capacity;
    this.weather = weather.getWeather();
  }

   land (plane) {
     this._isStormy();
     this._isFull();
     this._landPlane(plane)
   };


  takeOff () {
   this.hangar.pop()
 };

  _isFull () {
    if (this.hangar.length >= this.capacity){
    throw 'HANGAR FULL LANDING DENIED'
    }
  };

  _isStormy () {
    if (this.weather === true) {
      throw 'LANDING DENIED POOR WEATHER'
    }
  }

  _landPlane(plane){
    this.hangar.push(plane)
  }

};

module.exports = Airport;
