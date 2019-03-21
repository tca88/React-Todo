import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './components/TodoComponents/Todo.css';

function TodoApp() {
    return <App />
};

render(<TodoApp />, document.getElementById('root'));
