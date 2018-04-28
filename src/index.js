import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/configureStore';

import {editExpense , addExpense , removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import {getVisibleExpenses} from './selectors/selectFilteredExpenses';

const Store = store();

const a = Store.dispatch(addExpense({description : 'gas bill' , note : 'some notes' , amount: 400 , createdAt : 1000}));
Store.dispatch(addExpense({description : 'water bill' , note : 'some notes' , amount: 200 , createdAt : 2000}));
Store.dispatch(addExpense({description : 'gooz bill' , note : 'some notes' , amount: 300 , createdAt : 500}));


console.log(Store.getState());

const getState = Store.getState();

console.log(getVisibleExpenses(getState.expenses , getState.filters));



const Jsx = () => (
    <Provider store={Store}>
        <App/>
    </Provider>
);


ReactDOM.render(<Jsx/>, document.getElementById('root'));
registerServiceWorker();
