const isBuzz = (number) => {
    if (number % 5 === 0) {
        return 'Buzz';
    }
    return '';
}

module.exports = isBuzz;