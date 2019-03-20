// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props.todoListProp);
    return (
        <div className="todo-list">
            <div className="class-list">
            {props.todoListProp.map((todoFromMap, index) => (
                <Todo key={index} todoProp={todoFromMap} />
            ))}
        </div>
        </div>
    );

};

export default TodoList;