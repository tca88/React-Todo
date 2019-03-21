
import React from 'react';

const Todo = props => {

    return (
        <div className={`todoItem${props.todoItem.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.todoItem.id)}>
            <p>{props.todoItem.task}</p>
        </div>
    );
};

export default Todo;