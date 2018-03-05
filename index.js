
const driver = {name: "Sam"};
let newDriver = {};
/*
function updateDriverWithKeyAndValue(driver, key, value){
  newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

*/

//Or do it with Object.assign

function updateDriverWithKeyAndValue(driver, key, value){
  newObj = {key:value}
  return Object.assign({}, driver, newObj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {key:value});
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
