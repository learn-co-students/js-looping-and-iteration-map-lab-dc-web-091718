const lowerCaseDrivers = (obj) => {
  return obj.map(function (element) {return element.toLowerCase()})
}

const nameToAttributes = (obj) => {
  return obj.map(function (element) {return {firstName: element.split(' ')[0], lastName: element.split(' ')[1]}});
}

const attributesToPhrase = (obj) => {
  return obj.map(function (element) {
    return `${element.name} is from ${element.hometown}`;
  })
}
