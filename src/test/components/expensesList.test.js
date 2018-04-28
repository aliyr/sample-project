import React from 'react';
import {ExpensesListComponent} from '../../components/expensesList';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';

test('test not found page',() => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<NotFoundPage/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<ExpensesListComponent/>);
    expect(wrapper).toMatchSnapshot();

});
