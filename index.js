
const driver = {
  name: "Sam"
};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

updateDriverWithKeyAndValue(driver, "address", "11 Broadway");
console.log(newDriver['address']);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}
