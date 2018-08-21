import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import TodoInput from "./Components/todoinput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput />
        </div>
      </div>
    );
  }
}

export default App;