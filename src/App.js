import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Go Grocery Shopping',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Bake Cookies',
    id: 1528817084359,
    completed: false
  }

];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: todos,
    };
  }

  toggleItem = id => {
    this.setState({
      todoList: this.state.todoList.map(todoItem => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            completed: !todoItem.completed
          };
        }
        return todoItem;
      })
    });
  };

  handleChanges = event => {
    // console.log("event: ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTodoList = {
      task: this.state.task,
    };
    this.setState({
      todoList: [...this.state.todoList, newTodoList]
    });
  };

  clearCompleted = item => {
    const clearedItem = this.state.todoList.filter(
      item => item.completed === false
    );
    this.setState({todoList: clearedItem});
  };
  
  render() {
    return (
      <div className="todo-app-container">
        <h1>Todone</h1>
        <h3>A todo list management app you can count on.</h3>
        <div>
        <TodoList 
        todoListProp={this.state.todoList} 
        toggleItem={this.toggleItem}
        />
        </div>
        <div>
          <TodoForm
          task={this.state.task}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
          handleClickEvent={this.handleClickEvent}
          />
        </div>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
