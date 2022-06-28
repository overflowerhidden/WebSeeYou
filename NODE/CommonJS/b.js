let counter = 3;
function setCounter() {
  counter++
}
function getCounter() {
  return counter
}

module.exports = {
  counter,
  setCounter,
  getCounter
}