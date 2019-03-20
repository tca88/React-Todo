
import React from 'react';

const Todo = props => {

    return (
        <div className="todo-task">
            <p>{props.todoProp.task}</p>
        </div>
    );
};

export default Todo;