// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// Write Your JavaScript Code Here
// what do we need to do?
// what tools do we have?

if (expression1 || expression2){
    if (expression1 && expression2){
        console.log("true, true");
    }
    else if (expression1){
        console.log("true, false");
    }
    else {
        console.log("false, true");
    }
}
else{
    console.log("false, false");
}
