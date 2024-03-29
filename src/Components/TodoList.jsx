import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    const { itmes, clearList, handelDelete, handleEdit, disabled } = this.props;
    console.log("itmes", itmes);
    return (
      <ul className="list-group mt-5">
       {itmes.length? <h3 className="text-capitalize text-center"> Todo List</h3>:""}
        {itmes.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handelDelete={() => handelDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        {itmes.length ? (
          <button
            type="button"
            className="btn btn-block btn-danger text-capitalize mt-5"
            onClick={clearList}
            disabled={disabled}
          >
            clear list
          </button>
        ) : (
          ""
        )}
      </ul>
    );
  }
}

export default TodoList;
