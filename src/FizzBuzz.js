const isFizz = require('../src/isFizz');
const isBuzz = require('../src/isBuzz');
const isWhizz = require('../src/isWhizz');

const FizzBuzz = (number) => {
    var result = '';
    result += isFizz(number);
    result += isBuzz(number);
    result += isWhizz(number);
    return result.length === 0 ? number : result;
}

module.exports = FizzBuzz;