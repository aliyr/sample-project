import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';

test('test not found page',() => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<NotFoundPage/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();

});
