import React from "react";
import "./todoinput.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "test" };

    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  handleChange() {
    console.log("change here");
  }

  addToDo(todo) {
    console.log("TODO: ", todo);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value=""
          onChange={this.handleChange}
          placeholder="Enter a task here"
        />
        <button onClick={() => this.addToDo(this.state)}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
