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
     } else if (this._isFull() === true) {
       throw 'HANGAR FULL LANDING DENIED'
     } else {
     this.hangar.push(plane)
     return this.hangar.length
    }
   };


  takeOff () {
   this.hangar.pop()
   return this.hangar.length;
 };

  _isFull () {
    console.log(`got to _isFull ${this.hangar.length} ${this.capacity}`);
    return (this.hangar.length < this.capacity ? true : false)
  };

  _isStormy () {
    return (this.weather === true ? true : false)
  }

};

module.exports = Airport;
