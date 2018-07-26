import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';

const DEFAULT_STATE = {
    count: 0,
    jokes: []
  };
  
  function mainReducer(currentState = DEFAULT_STATE, action) {
    switch(action.type) {
      case 'ADD':
        return Object.assign({}, currentState, {
          count: currentState.count + 1
        });
      case 'SUBTRACT':
        return Object.assign({}, currentState, {
          count: currentState.count - 1
        });
      case 'LOAD_JOKES':
        return Object.assign({}, currentState, {
          jokes: action.jokes
        });
      default:
        return currentState;
    }
  }
  
  const { dispatch, getState, subscribe } = createStore(mainReducer);
  
  class Counter extends Component {
    constructor(props) {
      super(props);
  
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);
    }
  
    add() {
      const action = {
        type: 'ADD',
      };
  
      dispatch(action);
    }
  
    subtract() {
      const action = {
        type: 'SUBTRACT'
      };
  
      dispatch(action);
    }
  
    render() {
      return (
        <div>
          <span>{this.props.count}</span>
          <br />
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
        </div>
      );
    }
  }
  
  class ChuckNorrisJokes extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <ul>
          {this.props.jokes.map(joke => <li>{joke.joke}</li>)}
        </ul>
      );
    }
  
    componentDidMount() {
      getAllChuckNorrisJokes()
        .then(jokes => {
          dispatch({
            type: 'LOAD_JOKES',
            jokes
          });
        })
        .catch(e => console.error(e));
    }
  }
  
  class App extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { jokes, count } = getState();
  
      return (
        <div>
          <Counter count={count} />
          <ChuckNorrisJokes jokes={jokes} />
        </div>
      );
    }
  
    componentDidMount() {
      subscribe(this.forceUpdate.bind(this));
    }
  }