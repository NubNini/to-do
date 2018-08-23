import React from "react";
import "./todoItem.css";

class ToDoItem extends React.Component {
  removeToDo = id => {
    this.props.removeToDo(id);
  };

  render() {
    return (
      <div className="todoWrapper">
        <button
          className="removeTodo"
          onClick={e => this.removeToDo(this.props.id)}
        >
          Remove
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}
export default ToDoItem;
