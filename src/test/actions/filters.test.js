
import {setTextFilter ,sortByDate ,sortByAmount ,setStartDate ,setEndDate} from '../../actions/filter';

test('test set text filter' , () => {
    const setText = setTextFilter('gh');
    expect(setText).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'gh'
    })
});