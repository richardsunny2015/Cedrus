const calculate = (calculation, numbers) => {
    const basicCalcs = {
        add: (a, b) => a + b,
        subtract: (a, b) => a + b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b
    }
    return numbers.reduce(basicCalcs[calculation])
}

module.exports = {calculate}
