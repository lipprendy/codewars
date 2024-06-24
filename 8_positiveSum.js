function positiveSum(arr) {

  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.reduce(function (total, num) {
    if (num > 0) {
      return total + num;
    } else {
      return total;
    }
  }, 0);

  return sum;
}

let arrayExample = [1, -4, 7, 12];
let result = positiveSum(arrayExample);

console.log(result);
