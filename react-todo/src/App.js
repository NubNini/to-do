import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import TodoInput from "./Components/todoinput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, text: "Make dinner tonight" },
        { id: 1, text: "Fold the laundry" }
      ],
      nextId: 2
    };
  }

  addToDo = todoText => {
    console.log("TODO added: ", todoText);
  };

  removeToDo = id => {
    console.log("Removing: ", id);
  };

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addToDo={this.addToDo} />
        </div>
      </div>
    );
  }
}

export default App;
