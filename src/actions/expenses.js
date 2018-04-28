
import uuid from 'uuid';

export const addExpense = ({ description = "" , note = "" , amount = 0 , createdAt = 0 } = {}) => (
{
    type : "ADD_EXPENSE",
    expenses : {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
}
);

export const removeExpense = (id) => (
{
    type: "REMOVE_EXPENSE",
    id
}
);

export const editExpense = (id , editedItems) => (
{
    type : "EDIT_EXPENSE",
    id,
    editedItems
}
);



