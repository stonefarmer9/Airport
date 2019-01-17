const Airport = require('./airport')
const Plane = require('./plane')

airport = new Airport('Bristol')
plane = new Plane('Boeing 747')


test('the airport lands a plane', () => {
  expect(airport.land(plane)).toBe(1);
});

test('the airport allows a plane to take off', () =>{
  expect(airport.takeOff()).toBe(0);
});

test('the airport has a default capacity of 1 when constructed', () => {
  bath = new Airport('Bath')
  expect(bath.capacity).toBe(1)
})

test('The airports default capacity can be defined at construction', () => {
  bristol = new Airport('Bristol', 5)
  expect(bristol.capacity).toBe(5)
});
