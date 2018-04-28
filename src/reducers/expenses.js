// expenses-reducers

const expensesReducersDefault = [];

export default (state = expensesReducersDefault , action) => {
    switch (action.type){
        case 'ADD_EXPENSE' :
            return  state.concat(action.expenses);
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {

                return expense.id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){

                    return {
                        ...expense,
                        ...action.editedItems
                    };
                }else {
                    return expense;

                }

            });

        default :
            return state;
    }
};
