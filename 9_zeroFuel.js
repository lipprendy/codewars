const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump / mpg <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(30, 40, 0.8))
