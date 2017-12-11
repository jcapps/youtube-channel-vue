import expect from 'expect';
import market from '../../src/api/market';

describe('Market Api', () => {
    describe('getProducts', () => {
        it('Should make call to market API and get products', (done) => {
            // arrange
            const expectedResult = [
                {name: 'bowl'},
                {name: 'milk'},
                {name: 'spoon'},
                {name: 'cereal'}
            ];

            // act
            market.getProducts().then(result => {
                // assert
                expect(result).toEqual(expectedResult);
                done();
            });
        });
    });
});