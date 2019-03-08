# Airport Challenge

Program for control of flow of planes through an airport, depending on whether weather is stormy or clear as gnenerated by random

## Getting Started

Clone or download this Repo.

then load into Node

```
Node
```
in the terminal.

Once in the node repl
use as per image:

![Pic of app](./pics/pic1.png)

### Dependancies

```
- Javascript
- Jest - 23.6.0 - testing framework
- JS Node modules - For testing and use via Node REPL.
```

### Approach

I approached this in the same manner as the original challenge. The big difference being that this is another language. I used this simple 3 object program to get to grips with using Javascript and the Jest testing framework. In essence translating the original Ruby version to Javascript via test driving. This is really a simple demonstration of the type of project I can complete to learn a new language.  


### Code Structure

  Currently the app operates over three distinct classes; which I shall list here with their responsibilities and functions.

#### Airport
  - Responsibilities:
    - Controls the hangar via comparing capacity to hangar length.
    - Decides whether a plane can land or not due to weather.

  - Functions:
    - constructor: takes name, capacity, instantiates a hangar array and grabs the weather conditions.
    - Land() calls on other methods to decide if a plane can land, if they can it adds it to the hangar array.
    - TakeOff() - removes a plane from the array via .pop()
    - _isFull()_ private method - decides if the hangar is full or not via capactiy/hangar.length comparison.
    - _isStormy()_ private method - decides if the weather is stormy or not.
    - _landPlane()_ -private method for handling moving of planes to hangar via .push(.

#### Plane

  Is simply an object constructor with no other functions or responsibilities.

#### Weather
  - Responsibilities
    - Controls whether the weather is stormy or clear.

  - Functions:
    - getWeather() - randomly decides the weather, there is a 3 in 10 chance of weather being poor.


### Notes for the future

 - Considering this projects role as a learning exercise is complete and I now feel very confident with Javascript it is unlikely I will put any more time into this repo.

 - Potential work :
    - land needs to be shortened via extracting the if/else - have plated with some ideas of this.LandingCleared variables to control it but to no avail yet.
    - I would update the gitignore to remove both coverage and node modules from github.

- Potential test work:
      - more edge cases could be tested for perhaps, such as landing multiple planes at once. Changing weather etc.
      - Could test drive to stop takeOff in stormy weather too.  

## Authors


* **Georges Le Vaillant** - [GLV](https://github.com/stonefarmer9)



## Acknowledgments

* Makers Academy
