const calculate = (calculation, numbers) => {
    // pick a reduce cb based on the passed in calculation
    const basicCalcs = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b
    }
    return numbers.reduce(basicCalcs[calculation])
}

module.exports = {calculate}
