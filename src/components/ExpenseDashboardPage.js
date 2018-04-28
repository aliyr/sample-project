import React , {Component} from 'react';
import ExpensesList from './expensesList';

class ExpenseDashboardPage extends Component{

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <h1>
                    this is dashboard page
                </h1>
                <ExpensesList/>
            </div>
            )
    }
}

export default ExpenseDashboardPage;
