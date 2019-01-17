
class Airport {
  constructor(name, capacity = 1) {
    this.name = name;
    this.hangar = [];
    this.capacity = capacity;
  }

   land (plane) {
     this.hangar.push(plane);
     return this.hangar.length
};

  takeOff () {
   this.hangar.pop()
   return this.hangar.length;
  }
};

module.exports = Airport;
