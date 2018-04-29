import React , {Component} from 'react';
import ExpensesList from './expensesList';

class ExpenseDashboardPage extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    setStateAsync(state){
        return new Promise((resolve) => {
            this.setState(state , resolve);
        })
    }

    async componentDidMount() {
        const res =await fetch('http://jsonplaceholder.typicode.com/posts');
        debugger;
        const resolve = res.json();
        this.setState({resolves : resolve});
        console.log(this.state.resolves);
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
