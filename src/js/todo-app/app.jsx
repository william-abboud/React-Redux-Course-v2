import React, { Component } from 'react';
import Todo from './todo';
import CreateTodoForm from  './create-todo-form';
import TodoList from './todo-list'
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { todos } = this.props;
  
      return (
        <div>
            <CreateTodoForm createTodo={this.props.createTodo} />
            <TodoList>
              {
                todos.map(todo =>
                    <Todo 
                        name={todo.name}
                        id={todo.id}
                        onChange={this.props.changeTodoStatus}
                        onDelete={this.props.deleteTodo}
                        isCompleted={todo.isCompleted}
                    />
                )
              }
            </TodoList>
          </div>
      );
    }
}
  
App.defaultProps = {
    todos: []
};

function mapStateToProps(state) {
    const { todos } = state;

    return {
        todos: todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo(id) {
            const deleteTodoAction = {
                type: 'DELETE_TODO',
                id
            };

            dispatch(deleteTodoAction);
        },
        
        changeTodoStatus(status, id) {
            const changeTodoStatusAction = {
              type: 'CHANGE_TODO_STATUS',
              id,
              status
            };

            dispatch(changeTodoStatusAction);
        },

        createTodo(name) {
            const createTodoAction = {
                type: 'CREATE_TODO',
                todo: {
                    name
                }
            };

            dispatch(createTodoAction);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function connect(fn, fn) {
//     const props = fn(store.getState());
//      const propsWithMethods = fn(store.dispatch);

//     return (Component) => {
//         return <Component todos={props.todos} {...propsWithMethods} />;
//     }
// }