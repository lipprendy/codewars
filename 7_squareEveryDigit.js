function squareDigits(num) {
  
  const digits = num.toString().split('').map(Number);

  const result = parseInt(digits.map((digit) => digit ** 2).join(''), 10);

  return result;
}

const resultExample1 = squareDigits(9119);
const resultExample2 = squareDigits(765);

console.log(resultExample1);
console.log(resultExample2) 
