import {shallow} from 'vue-test-utils';
import expect from 'expect';
import HomePage from '../../../src/components/home/HomePage';

describe('Home Page', () => {
    it('Should create the page header', () => {
        // act
        const component = shallow(HomePage);
        const h1 = component.find('h1');
        
        // assert
        expect(h1.is('h1')).toEqual(true);
        expect(h1.text()).toEqual('Home Page');
    });
});