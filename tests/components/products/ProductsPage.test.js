import {shallow, createLocalVue} from 'vue-test-utils';
import Vuex from 'vuex';
import expect from 'expect';
import sinon from 'sinon';
import ProductsPage from '../../../src/components/products/ProductsPage';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Products Page', () => {
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            getAllProducts: sinon.stub(),
            clearProducts: sinon.stub()
        };
        store = new Vuex.Store({
            state: {},
            actions
        });
    });

    it('Should create the page header', () => {
        // act
        const component = shallow(ProductsPage, {localVue, store});
        const h1 = component.find('h1');
        
        // assert
        expect(h1.is('h1')).toEqual(true);
        expect(h1.text()).toEqual('Products');
    });

    it('Should create two buttons', () => {
        // act
        const component = shallow(ProductsPage, {localVue, store});
        const buttons = component.findAll('button');
        
        // assert
        expect(buttons.length).toEqual(2);
        expect(buttons.at(0).text()).toEqual('Get Products');
        expect(buttons.at(1).text()).toEqual('Hide Products');
    });

    it('Should create table of products', () => {
        // act
        const component = shallow(ProductsPage, {localVue, store});
        component.setComputed({
            allProducts: [
                {name: 'milk'},
                {name: 'cereal'}
            ]
        });
        const table = component.find('table');
        const rows = table.findAll('tr');
        
        // assert
        expect(table.is('table')).toEqual(true);
        expect(rows.length).toEqual(2);
        expect(rows.at(0).text()).toEqual('1. milk');
        expect(rows.at(1).text()).toEqual('2. cereal');
    });

    it('Should getAllProducts on \'Get Products\' button click', () => {
        // act
        const component = shallow(ProductsPage, {localVue, store});
        const buttons = component.findAll('button');
        buttons.at(0).trigger('click');
        
        // assert
        expect(actions.getAllProducts.calledOnce).toEqual(true);
    });

    it('Should clearProducts on \'Hide Products\' button click', () => {
        // act
        const component = shallow(ProductsPage, {localVue, store});
        const buttons = component.findAll('button');
        buttons.at(1).trigger('click');
        
        // assert
        expect(actions.clearProducts.calledOnce).toEqual(true);
    });
});