import React from 'react';

const TodoForm= props => {

    return (
        <form>
            <input
                value={props.task}
                name="task"
                placeholder="...todo"
                onChange={props.handleChanges} // onChange takes in a function definition.
            />
            <button onClick={props.updateList}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;