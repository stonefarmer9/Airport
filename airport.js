const Weather = require('./weather')

class Airport {
  constructor(name, capacity = 1, weather = new Weather) {
    this.name = name;
    this.hangar = [];
    this.capacity = capacity;
    this.weather = weather.getWeather();
  }

   land (plane) {
     if (this.weather === true) {
       return 'LANDING DENIED POOR WEATHER'
     } else if (this._isFull() === false) {
       this.hangar.push(plane)
     return this.hangar.length
   } else {
     return 'HANGAR FULL LANDING DENIED'
   }
   };


  takeOff () {
   this.hangar.pop()
   return this.hangar.length;
 };

  _isFull () {
   if (this.hangar.length < this.capacity) {
     return false
   } else {
     return true
   }
  };

};

module.exports = Airport;
