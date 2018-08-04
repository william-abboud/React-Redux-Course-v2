import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomeView from './views/home-view';
import AboutView from './views/about-view';
import BooksLayout from './layouts/books-layout';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/newbooks">Books</Link></li>
            </ul>
          </nav>
        </header>
        <React.Fragment>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/about" component={AboutView} />
            <Route path="/newbooks" component={BooksLayout} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

function AppWrapper() {
  return <Router><App /></Router>
}

export default hot(module)(AppWrapper);