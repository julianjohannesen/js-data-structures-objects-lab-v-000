
const driver = {
  name: "Sam"
};

function updateDriverWithKeyAndValue(driver, key, value){
  this[key] = value;
  return this;
}
updateDriverWithKeyAndValue(driver, "address", "11 Broadway");
console.log(driver['address']);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

}
