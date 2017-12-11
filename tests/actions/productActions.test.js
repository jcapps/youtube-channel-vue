import expect from 'expect';
import sinon from 'sinon';
import market from '../../src/api/market';
import * as productActions from '../../src/actions/productActions';

describe('Product Actions', () => {
    describe('getProducts', () => {
        it('Should getProducts from market', () => {
            // arrange
            const newProducts = [
                {name: 'product1'},
                {name: 'product2'}
            ];
            
            const commit = (type, payload) => {
                // assert
                expect(type).toEqual('GET_ALL_PRODUCTS');
                expect(payload).toEqual(newProducts);
            };

            let mockAction = sinon.stub(market, 'getProducts');
            mockAction.resolves(newProducts);

            // act
            productActions.getAllProducts({commit});

            // assert
            expect(mockAction.calledOnce).toEqual(true);
            mockAction.restore();
        });
    });

    describe('clearProducts', () => {
        it('Should clearProducts', () => {
            // arrange
            const commit = (type, payload) => {
                // assert
                expect(type).toEqual('CLEAR_PRODUCTS');
                expect(payload).toEqual(null);
            };
    
            // act
            productActions.clearProducts({commit});
        });
    });
});