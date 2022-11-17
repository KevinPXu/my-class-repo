// 1) Where is carNoise stored?
// stored in the global execution context 
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // after goFast is called, then speed is assigned a value, this value is stored in the function execution context 
  
  // 5) Where is makeNoise stored?
  // stored in the function execution context within goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // make noise is called which places it on the call stack and assigns carNoise to the value of sound
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// calls a function on the global execution context named confirm and if that function returns true, then go Fast is called 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
