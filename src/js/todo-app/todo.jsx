import React from 'react';
import { number, bool, string, func } from 'prop-types';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onDelete(ev) {
        this.props.onDelete(this.props.id, ev);
    }

    onStatusChange({ target }) {
        this.props.onChange(target.checked, this.props.id);
    }

    render() {
        const { id, isCompleted, name } = this.props;

        return (
            <div className="todo" id={id}>
                <h2>{name}</h2>
                <div>
                    <input type="checkbox" checked={isCompleted} onChange={this.onStatusChange} />
                    <button onClick={this.onDelete}>Delete</button>
                </div>
            </div>
        );
    }
}

Todo.propTypes = {
    id: number.isRequired,
    isCompleted: bool.isRequired,
    name: string.isRequired,
    onChange: func.isRequired,
    onDelete: func.isRequired
};

export default Todo;