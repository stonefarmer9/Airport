const Airport = require('./airport')
const Plane = require('./plane')
const Weather = require('./weather')
jest.mock('./weather');


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

test("The airport doesn't let you land when the hangar is full", () => {
  wells = new Airport('Wells', 1)
  plane2 = new Plane('Spitfire')
  wells.land(plane)
  console.log(wells.hangar.length);
  expect(wells.land(plane2)).toThrow('HANGAR FULL LANDING DENIED')
});
describe("Stormy weather", () => {

test("The airport doesn't let you land when weather is stormy", () =>{
  york = new Airport('york', 1, { getWeather: () => true })
  plane = new Plane('plane')
  expect(york.land(plane)).toThrow('LANDING DENIED POOR WEATHER')
});

})
