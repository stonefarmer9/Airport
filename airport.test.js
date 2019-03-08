const Airport = require('./airport')
const Plane = require('./plane')
const Weather = require('./weather')
jest.mock('./weather');

  let airport;
  let plane;

describe('The Airport', ()=> {


beforeEach(() => {
  airport = new Airport('Bristol', { getWeather: () => false })
  plane = new Plane('Boeing 747')
})

test('the airport lands a plane', () => {
  airport.land(plane)
  expect(airport.hangar.length).toBe(1);
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


describe("Landing Denied", () => {
  let york;
  let plane;

  beforeEach(() => {
    york = new Airport('york', 1, { getWeather: () => true })
    plane = new Plane('spitfire')
  })

test("The airport doesn't let you land when weather is stormy", () =>{

  expect(() => {
    york.land(plane).toThrow();
  })
});

})
})
