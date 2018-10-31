// Code your solution in this file.
function lowerCaseDrivers(driversArr) {
  return driversArr.map(function(driverName) {
    return driverName.toLowerCase();
  });
}


function nameToAttributes(driversArr) {
  return driversArr.map(function(driverName) {
    const firstName = driverName.split(' ')[0];
    const lastName = driverName.split(' ')[1];

    return { firstName: firstName, lastName: lastName}
  })
}

function attributesToPhrase(driversObj) {
  return driversObj.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
