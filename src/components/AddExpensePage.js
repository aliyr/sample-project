import React , {Component} from 'react';
import {Route , Link} from 'react-router-dom';
import AddTopic from './addTopic';

class AddExpensePage extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>
                    this is add page
                </h1>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/add_and_edit`}>Add and Edit</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/just_add`}>Just add</Link>
                    </li>
                </ul>
                {/*<Route path={`${this.props.match.url}`} exact render ={() => (<div>please select on of items above</div>)}/>*/}
                <Route path={`${this.props.match.url}/:addTopic`} component={AddTopic}/>
            </div>
        )
    }
}

export default AddExpensePage;
