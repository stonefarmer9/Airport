const Weather = require('./weather')

class Airport {

  constructor(name, capacity = 1, weather = new Weather) {
    this.name = name;
    this.hangar = [];
    this.capacity = capacity;
    this.weather = weather.getWeather();
  }

   land (plane) {
     if (this._isStormy() === true) {
       throw 'LANDING DENIED POOR WEATHER'
     } else if (this._isFull() === false) {
       throw 'HANGAR FULL LANDING DENIED'
     } else {
       return(this._landPlane(plane))
    }
   };


  takeOff () {
   this.hangar.pop()
 };

  _isFull () {
    return this.hangar.length < this.capacity
  };

  _isStormy () {
    return this.weather === true
  }

  _landPlane(plane){
    this.hangar.push(plane)
  }

};

module.exports = Airport;
