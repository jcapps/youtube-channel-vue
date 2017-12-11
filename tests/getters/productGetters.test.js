import expect from 'expect';
import * as productGetters from '../../src/getters/productGetters';

describe('Product Getters', () => {
    describe('allProducts', () => {
        it('Should retrieve products from state', () => {
            // arrange
            const state = {
                products: [
                    {name: 'product1'},
                    {name: 'product2'}
                ]
            };

            // act
            const result = productGetters.allProducts(state);

            // assert
            expect(result).toEqual(state.products);
        });
    });
});