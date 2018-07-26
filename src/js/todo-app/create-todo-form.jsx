import React from 'react';

class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        this.onCreate = this.onCreate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onCreate(ev) {
        ev.preventDefault();

        this.props.createTodo(this.state.todoName);
    }

    handleChange({ target }) {
        this.setState({
            todoName: target.value
        });
    }

    render() {
        return (
            <form className="create-todo-form" onSubmit={this.onCreate}>
                <input type="text" onChange={this.handleChange} value={this.state.todoName} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default CreateTodoForm;