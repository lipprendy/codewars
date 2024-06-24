function squareSum(numbers) {
    let squaredNumbers = numbers.map(function(num) {
        return num ** 2;
    })

    let sum = squaredNumbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)

    return sum;
}

let numbers = [2, 3]
console.log(squareSum(numbers))

















































