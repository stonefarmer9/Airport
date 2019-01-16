const Airport = require('./airport')
airport = new Airport('Bristol')
console.log(airport)
test('the airport lands a plane', () => {
  expect(airport.land(plane)).toBe(plane);
})
