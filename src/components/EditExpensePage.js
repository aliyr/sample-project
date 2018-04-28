import React , {Component} from 'react';
import {connect} from 'react-redux';

class EditExpensePageComponent extends Component{

    constructor(props) {
        super(props);

    }

    getExpense() {
        const res = this.props.expenses.filter((expense) => {
            const a = this.props.match.params.id;
            return expense.id === this.props.match.params.id
        })[0];

        return res;
        //
        // if(res) {
        //     return res;
        // }else {
        //     this.props.history.push('/');
        // }
    }


    render() {

        return (
            <div>
                <h1>
                    this is edit page for {this.getExpense() !== undefined ? this.getExpense().description : this.props.history.push('/')}
                </h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      expenses : state.expenses
  }
};

const EditExpensePage = connect(mapStateToProps)(EditExpensePageComponent);

export default EditExpensePage;
