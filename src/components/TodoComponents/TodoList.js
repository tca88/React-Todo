// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props.todoListProp);
    return (
        <div className="todo-list">
            {props.todoListProp.map((todoItem) => (
                <Todo key={todoItem.id} todoItem={todoItem} toggleItem={props.toggleItem} />
            ))}
        </div>
    );

};

export default TodoList;