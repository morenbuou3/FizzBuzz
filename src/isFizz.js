const isFizz = (number) => {
    if (number % 3 === 0) {
        return 'Fizz';
    }
    return '';
}

module.exports = isFizz;