function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      if (value2 !== 0) {
        return value1 / value2;
      } else {
        return 'Cannot divide by zero';
      }
    default:
      return 'Invalid operator';
  }
}

console.log(basicOp('+', 4, 7)); 
