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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    // state === data (what our data looks like at any given point... what
    // is the "state" of my data right now)
    // this is NOT muttable - we will change "state" following immutability principles
    this.state = {
      todoList: todos,
      // task: "",
      // id: "",
      // completed: ""
    };
  }

  toggleItem = id => {
    this.setState({
      todoList: this.state.todoList.map(todoItem => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased
            completed: !todoItem.completed
          };
        }
        return todoItem;
      })
    });
    // loop over groceries
    // find grocery by given id
    // change flag to true
    // return updated list to state.
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
  
  render() {
    return (
      <div className="todo-app-container">
        <h1>Todo List: MVP</h1>
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
      </div>
    );
  }
}

export default App;
