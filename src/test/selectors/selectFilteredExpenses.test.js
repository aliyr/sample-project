
import {getVisibleExpenses} from '../../selectors/selectFilteredExpenses';

const expenseObj = [
    {
          id:1,
          description:'desc 1',
          note: 'note 1',
          amount:1000,
          createdAt:200,
    },
    {
        id:2,
        description:'desc 2',
        note: 'note 2',
        amount:2000,
        createdAt:300,
    },
    {
        id:3,
        description:'desc 3',
        note: 'note 3',
        amount:3000,
        createdAt:100,
    }
];

test('test set text filter',() => {

    const filteredObj = getVisibleExpenses(expenseObj , {text : '1'});
    expect(filteredObj).toEqual([expenseObj[0]])
});