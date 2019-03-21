
import React from 'react';
import check from '../TodoComponents/img/check-mark.png';

const Todo = props => {
    // console.log(props);
    return (
    <div className="todos">
     <img className={`checkMark${props.todoItem.completed ? " include" : ""}`} src={check} alt="check mark icon"/>
        <div className={`todoItem${props.todoItem.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.todoItem.id)}>
            <p>{props.todoItem.task}</p>
        </div>
    </div>
    );
};

export default Todo;