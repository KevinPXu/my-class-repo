//WRITE YOUR CODE BELOW
var customerOrder = {
  drinkName: "Coffee",
  numSugar: 3,
  isReady: true,
};

console.log(customerOrder.drinkName + customerOrder.numSugar + "sugar.");

if (customerOrder.isReady == true) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
