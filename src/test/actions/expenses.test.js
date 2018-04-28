
import {addExpense , editExpense , removeExpense} from '../../actions/expenses';

test('test add expense',() => {

    const addObj = {
        description:'gholi',
        note:"note"
    };

    const add = addExpense(addObj);

    expect(add).toEqual({
        type:'ADD_EXPENSE',
        expenses: {
            amount:0,
            createdAt:0,
            ...addObj,
            id : expect.any(String)
        }
    })
});