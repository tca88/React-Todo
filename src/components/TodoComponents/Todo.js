
import React from 'react';

const Todo = props => {

    return (
        <div>
            <p>{props.todoProp.task}</p>
        </div>
    );
};

export default Todo;