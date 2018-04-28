import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFoundPage extends Component{
    render() {

        return (
            <div>
                <h1>
                    404!<Link to="/">go home</Link>
                </h1>
            </div>
        )
    }
}

export default NotFoundPage;

