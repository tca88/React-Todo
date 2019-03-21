import React from 'react';

const TodoForm= props => {

    return (
        <form>
            <input
                value={props.task}
                name="task"
                placeholder="...todo"
                onChange={props.handleChanges}
            />
            <button onClick={props.updateList}>Add Todo</button>
        </form>
    );
};

export default TodoForm;