const Airport = require('./airport')
const Plane = require('./plane')
const Weather = require('./weather')


weather = new Weather

test('Weather can tell you weather is stormy or clear', () => {
  expect(weather.getWeather()).toBeDefined()
});
