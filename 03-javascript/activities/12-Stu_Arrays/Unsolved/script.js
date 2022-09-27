// WRITE YOUR CODE HERE
var namesArr = ["Joe", "Morgan", "Kevin"];

console.log(namesArr.length);

for (var i = 0; i < namesArr.length; i++) {
    console.log("welcome to the class " + namesArr[i]);
}

namesArr[0] = "Bob";
console.log(namesArr);

if (namesArr[0] === "Bob"){
    console.log("Bob is in class");
}