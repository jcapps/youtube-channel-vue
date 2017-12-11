import {shallow, createLocalVue} from 'vue-test-utils';
import expect from 'expect';
import Router from 'vue-router';
import App from '../../src/components/App';
import Header from '../../src/components/common/Header';

// Add $route and $router as read-only properties on Vue prototype
const localVue = createLocalVue();
localVue.use(Router);

describe('App', () => {
    it('Should create the Header', () => {
        // act
        const component = shallow(App, {localVue});
        const hasHeader = component.contains(Header);
        
        // assert
        expect(hasHeader).toEqual(true);
    });

    it('Should create the page content', () => {
        // act
        const component = shallow(App, {localVue});
        const content = component.find('#content');
        
        // assert
        expect(content.is('div')).toEqual(true);
    });
});