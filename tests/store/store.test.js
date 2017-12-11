import expect from 'expect';
import sinon from 'sinon';
import store from '../../src/store';

describe('Store', () => {
    it('Should set products in state on GET_ALL_PRODUCTS commit', () => {
        // arrange
        const newProducts = [
            {name: 'milk'},
            {name: 'cereal'}
        ];

        // act
        store.commit('GET_ALL_PRODUCTS', newProducts);

        // assert
        const productsInStore = store.getters.allProducts;
        expect(productsInStore).toEqual(newProducts);
    });

    it('Should set products in state on CLEAR_PRODUCTS commit', () => {
        // act
        store.commit('CLEAR_PRODUCTS', []);

        // assert
        const productsInStore = store.getters.allProducts;
        expect(productsInStore).toEqual([]);
    });
});