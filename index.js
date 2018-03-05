
const driver = {name: "Sam"};
let newDriver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

updateDriverWithKeyAndValue(driver, "address", "11 Broadway");
console.log(newDriver['address']);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  newDriver = { ...driver};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
