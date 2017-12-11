import {shallow} from 'vue-test-utils';
import expect from 'expect';
import Header from '../../../src/components/common/Header';
import NavBar from '../../../src/components/common/NavBar';

describe('Header', () => {
    it('Should create the NavBar', () => {
        // act
        const component = shallow(Header);
        const navbar = component.find(NavBar);
        
        // assert
        expect(navbar.is(NavBar)).toEqual(true);
    });
});