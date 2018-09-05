const FizzBuzz = require('../src/FizzBuzz')

const Game = () => {
    const result = [...Array(120).keys()].map(n => FizzBuzz(n + 1));
    console.log(result);
}

Game();

module.exports = Game;