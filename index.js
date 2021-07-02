// Code your solution here
function findMatching(driversArray, condition) {
  return driversArray.filter( (driver) => {
    return driver.toLowerCase() === condition.toLowerCase();
  })
}

function fuzzyMatch(driversArray, condition) {
  return driversArray.filter( (driver) => {
    let num = condition.length;
    return driver.slice(0, num) === condition;
  })
}

function matchName(driversArray, condition) {
  return driversArray.filter( (driverObject) => {
    return driverObject.name === condition;
  })
}