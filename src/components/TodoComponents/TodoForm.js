import React from 'react';

const TodoForm= props => {

    return (
        <form>
                <input
                    value={props.task}
                    name="task"
                    placeholder="What's next on the list?"
                    onChange={props.handleChanges}
                    className="task-field"
                />
            <button className="add-button" onClick={props.updateList}>Add Todo</button>
        </form>
    );
};

export default TodoForm;