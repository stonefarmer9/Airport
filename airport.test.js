const Airport = require('./airport')
const Plane = require('./plane')
airport = new Airport('Bristol')
plane = new Plane('Boeing 747')
console.log(airport)
console.log(plane)
test('the airport lands a plane', () => {
  expect(airport.land(plane)).toBe(plane);
})
