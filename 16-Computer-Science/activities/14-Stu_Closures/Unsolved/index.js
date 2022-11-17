// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;
  return {
    increment: () => {
      return count++;
    },
  };
}

module.exports = counter;
