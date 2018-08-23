import React from "react";
import "./todoinput.css";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleKeyPress = target => {
    if (target.charCode === 13) {
      console.log("hi");
      this.addToDo(this.state.value);
    }
  };

  addToDo = todo => {
    this.props.addToDo(todo);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input
          onKeyPress={this.handleKeyPress}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a task here"
        />
        <button onClick={() => this.addToDo(this.state.value)}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
