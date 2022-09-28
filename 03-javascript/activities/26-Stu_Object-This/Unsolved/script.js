//console logs the global object
console.log(this);

function helloThis() {
  // this is still referring to the global object even within the function
  console.log("Inside this function, this is " + this);
}
helloThis();

var child = {
  age: 10,
  ageTenYears: function () {
    //console logs 10 + 10 or 20, calls self in object child
    console.log(this.age + 10);

    console.log(this.age);
  },
};

child.ageTenYears();

var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      //console logs the initialInvestment or 5000 from the object this is in.
      console.log(this.initialInvestment);
    },
  },
};

investor.investment.investmentGrowth();
