// Write Your Code Below
var num1 = 20;
var num2 = 21;

function compare(num1, num2) {
  if (num1 === num2) {
    console.log("They are equal in type and value");
  } else if (num1 == num2) {
    console.log("They are equal in value");
  } else {
    console.log("The values are not equal");
  }
}

compare(num1, num2);
