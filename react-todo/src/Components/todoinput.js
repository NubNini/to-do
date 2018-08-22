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

  addToDo = todo => {
    this.props.addToDo(todo);
    // console.log("TODO: ", todo);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a task here"
        />
        <button onClick={() => this.addToDo(this.state)}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
