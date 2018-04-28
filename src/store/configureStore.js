
import {createStore , combineReducers} from 'redux';

import expensesReducers from '../reducers/expenses';
import filtersReducers from '../reducers/filter';


const store = () => {
    return createStore(
        combineReducers({
            expenses : expensesReducers,
            filters: filtersReducers

        })
    );
};

export default store;