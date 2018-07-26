import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <ul className="todo-list">
                {React.Children.map(children, (child) => <li>{child}</li>)}
            </ul>
        );
    }
}

export default TodoList;