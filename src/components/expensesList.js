import React , {Component} from 'react';
import {connect} from 'react-redux';
import ExpensesListItems from './expensesListItem';
import {setTextFilter,sortByAmount ,sortByDate} from '../actions/filter';
import {getVisibleExpenses} from '../selectors/selectFilteredExpenses';

export class ExpensesListComponent extends Component{
    constructor (props) {
        super(props);

    }

    onInputFilteredChange(event) {
        this.props.dispatch(setTextFilter(event.target.value))
    }

    sortBy(event) {
        const sortByValue = event.target.value;
        if(event.target.value === 'amount'){
            this.props.dispatch(sortByAmount());
        }


        if(event.target.value === 'date'){
            this.props.dispatch(sortByDate());
        }
    }

    render() {
        return (
            <div>
                <h1>this is Expenses List</h1>
                <br/>
                <input type="text" value={this.props.filters.text} onChange={this.onInputFilteredChange.bind(this)}/>
                <br/>
                <select value={this.props.filters.sortBy} onChange={this.sortBy.bind(this)}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>

                </select>
                <table>
                    <ExpensesListItems/>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses , state.filters),
        filters : state.filters
    }
};

const ExpensesList = connect(mapStateToProps)(ExpensesListComponent);

export default ExpensesList;