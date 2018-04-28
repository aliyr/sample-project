import React, { Component } from 'react';
// import './styles/components/App.scss';

import {BrowserRouter , Route , Switch} from 'react-router-dom';

import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import NotFoundPage from './components/NotFoundPage';

// redux and dependencies import

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/add" component={AddExpensePage}/>
          <Route path="/edit/:id" component={EditExpensePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
