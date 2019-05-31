// class Car() {
// }
// class CarWithAC() {
// }
// class CarWithAutoTransmission {
// }
// class CarWithPowerLocks {
// }
// class CarWithACandPowerLocks {
// }

class Car {
    constructor() {
    // Default Cost
    this.cost = function() {
    return 20000;
    }
  }
  }
  // Decorator function
  function carWithAC(car) {
    car.hasAC = true;
    const prevCost = car.cost();
    car.cost = function() {
      return prevCost + 500;
    }
  }
  // Decorator function
  function carWithAutoTransmission(car) {
    car.hasAutoTransmission = true;
     const prevCost = car.cost();
    car.cost = function() {
      return prevCost + 2000;
    }
  }
  // Decorator function
  function carWithPowerLocks(car) {
    car.hasPowerLocks = true;
    const prevCost = car.cost();
    car.cost = function() {
      return prevCost + 500;
    }
  }

  const myCar = new Car();

  console.log(myCar.cost());
  
  carWithPowerLocks(myCar);
  carWithAutoTransmission(myCar);
  console.log(myCar.cost())