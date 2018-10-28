// Code your solution in this file.
function lowerCaseDrivers (drivers) {
	
	return drivers.map(function (driver) {
		 return driver.toLowerCase();
	})
	
}

function nameToAttributes(drivers) {
	return drivers.map(function (driver) {
		let names = driver.split(' ');
		let driverObj = {};
		driverObj.firstName = names[0];
		driverObj.lastName = names[1];
		return driverObj;
	})
}

function attributesToPhrase (drivers) {
	return drivers.map(function (driver) {
		return driver.name + " is from " + driver.hometown;
	})
}