import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import TodoInput from "./Components/todoinput";
import TodoItem from "./Components/todoitem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addToDo = todoText => {
    console.log("TODO added: ", todoText);
    var newArray = [
      ...this.state.todos,
      { id: this.state.todos.length + 1, text: todoText }
    ];
    this.setState({ todos: newArray });
    console.log(newArray);
  };

  removeToDo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addToDo={this.addToDo} />
          <ul>
            {this.state.todos.map(item => (
              <TodoItem
                todo={item}
                key={item.id}
                id={item.id}
                removeToDo={this.removeToDo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
