
class Airport {
  constructor(name) {
    this.name = name;
    this.plane = 0;
  }

   land (plane) {
   return this.plane = plane;
}

  takeOff () {
    return this.plane = 0
  }
};

module.exports = Airport;
