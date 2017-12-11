import expect from 'expect';
import * as productMutations from '../../src/mutations/productMutations';

describe('Product Mutations', () => {
    describe('GET_ALL_PRODUCTS', () => {
        it('Should set store with retrieved products', () => {
            // arrange
            const state = {
                products: [
                    {name: 'product1'},
                    {name: 'product2'}
                ]
            };

            // act
            productMutations.CLEAR_PRODUCTS(state);

            // assert
            expect(state.products).toEqual([]);
        });
    });

    describe('CLEAR_PRODUCTS', () => {
        it('Should clear store products', () => {
            // arrange
            const state = {
                products: [
                    {name: 'product1'},
                    {name: 'product2'}
                ]
            };

            // act
            productMutations.CLEAR_PRODUCTS(state);

            // assert
            expect(state.products).toEqual([]);
        });
    });
});