
import expensesReducer from '../../reducers/expenses';

const state = [
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

test('test remove reducer',() => {
    const reducer = expensesReducer(state , {type: 'REMOVE_EXPENSE' , id:state[1].id});

    expect(reducer).toEqual([state[0],state[2]]);
});