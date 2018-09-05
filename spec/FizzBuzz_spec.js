const isFizz = require('../src/isFizz')
const isBuzz = require('../src/isBuzz')
const isWhizz = require('../src/isWhizz')
const FizzBuzz = require('../src/FizzBuzz')
const Game = require('../src/Game')

describe('', () => {
    describe('', () => {
        it('should return fizz when given 3', () => {
            expect(isFizz(3)).toEqual('Fizz');
        });
    });

    describe('', () => {
        it('should return buzz when given 5', () => {
            expect(isBuzz(5)).toEqual('Buzz');
        });
    });

    describe('', () => {
        it('should return whizz when given 7', () => {
            expect(isWhizz(7)).toEqual('Whizz');
        });
    });

    describe('', () => {
        it('should return fizzBuzz when given 15', () => {
            expect(FizzBuzz(15)).toEqual('FizzBuzz');
        });
    });

    describe('', () => {
        it('should return fizzWhizz when given 21', () => {
            expect(FizzBuzz(21)).toEqual('FizzWhizz');
        });
    });

    describe('', () => {
        it('should return buzzWhizz when given 35', () => {
            expect(FizzBuzz(35)).toEqual('BuzzWhizz');
        });
    });

    describe('', () => {
        it('should return fizzBuzzWhizz when given 105', () => {
            expect(FizzBuzz(105)).toEqual('FizzBuzzWhizz');
        });
    });
});