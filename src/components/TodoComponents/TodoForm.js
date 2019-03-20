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
        </form>
    );
};

export default TodoForm;