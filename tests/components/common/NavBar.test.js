import {shallow, createLocalVue} from 'vue-test-utils';
import expect from 'expect';
import Router from 'vue-router';
import NavBar from '../../../src/components/common/NavBar';

// Add $route and $router as read-only properties on Vue prototype
const localVue = createLocalVue();
localVue.use(Router);

describe('NavBar', () => {
    it('Should create the navigation menu', () => {
        // act
        const component = shallow(NavBar, {localVue});
        const nav = component.find('nav');
        
        // assert
        expect(nav.is('nav')).toEqual(true);
    });

    it('Should create the two menu items', () => {
        // act
        const component = shallow(NavBar, {localVue});
        const ul = component.find('ul');
        const listItems = ul.findAll('li');
        
        // assert
        expect(ul.is('ul')).toEqual(true);
        expect(listItems.length).toEqual(2);
    });
});