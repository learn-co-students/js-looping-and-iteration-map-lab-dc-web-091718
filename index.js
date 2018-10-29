// Code your solution in this file.

// const originalNumbers = [1, 2, 3, 4, 5];
//
// const squaredNumbers = map(originalNumbers, function(num) {
//     return num * num;
// });
//
// originalNumbers;
// // => [1, 2, 3, 4, 5]
//
// squaredNumbers;
// // => [1, 4, 9, 16, 25]

function lowerCaseDrivers(list){
  return list.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
