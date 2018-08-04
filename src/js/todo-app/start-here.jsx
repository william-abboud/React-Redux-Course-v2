import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './todo-app/app';

const store = createStore(function todosReducer(state = { todos: [], filter: "" }, action) {
  switch(action.type) {
    case 'CHANGE_TODO_STATUS':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isCompleted: action.status
            });
          }
          
          return todo;
        })
      });
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });
    case 'CREATE_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, { id: Math.random(), name: action.todo.name, isCompleted: false }]
      });
    default:
      return state;
  }
});

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default hot(module)(TodoApp);