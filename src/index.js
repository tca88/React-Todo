import React from 'react';
import { render } from 'react-dom';
import App from './App';

function TodoApp() {
    return <App />
};

render(<TodoApp />, document.getElementById('root'));
