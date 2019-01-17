
class Airport {
  constructor(name) {
    this.name = name;
    this.hangar = [];
    this.capacity = 1;
  }

   land (plane) {
   return this.hangar.push(plane).length();
}

  takeOff () {
    return this.hangar.pop().length();
  }
};

module.exports = Airport;
