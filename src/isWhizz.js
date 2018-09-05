const isWhizz = (number) => {
    if (number % 7 === 0) {
        return 'Whizz';
    }
    return '';
}

module.exports = isWhizz;