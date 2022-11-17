function searchFor(arr, randomNum) {
  for (let i of arr) {
    if (i === randomNum) {
      console.log(arr.indexOf(i));
    }
    return console.log("none match");
  }
}
