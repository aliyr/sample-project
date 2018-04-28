import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {getVisibleExpenses} from '../selectors/selectFilteredExpenses';
import {Link} from 'react-router-dom';

class ExpensesListItems extends Component{

    constructor (props) {
        super(props);
        this.state = {
            value : ''
        }
    }

    render () {
        return(
            <tbody>
            {this.props.expenses.map(
                (expense , index) => (
                    <tr key={expense.id}>
                        <td>
                            <Link to={`edit/${expense.id}`}>
                                {expense.description}
                            </Link>
                        </td>
                        <td>{expense.amount}</td>
                        <td>{expense.createdAt}</td>
                        <td>
                            <button onClick={() => {
                                this.props.dispatch(removeExpense(expense.id));
                                debugger;
                            }}>
                                delete item
                            </button>
                        </td>

                    </tr>
                )
            )}
            </tbody>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses , state.filters),
        filters : state.filters
    }
};

const connectExpensesListItems = connect(mapStateToProps)(ExpensesListItems);

export default connectExpensesListItems;
