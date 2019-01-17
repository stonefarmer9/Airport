
class Airport {
  constructor(name, capacity = 1) {
    this.name = name;
    this.hangar = [];
    this.capacity = capacity;
  }

   land (plane) {
     if (this.hangar.length < this.capacity) {
       this.hangar.push(plane)
     return this.hangar.length
   } else {
     return 'HANGAR FULL LANDING DENIED'
   }
   };


  takeOff () {
   this.hangar.pop()
   return this.hangar.length;
  }
};

module.exports = Airport;
