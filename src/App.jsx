import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.inputfield = "";
    this.state = {
      todoList: ["code today", "Go on a date"],
    };
  }

  handleDeleteItem = (index) => {
    this.setState((prevState) => {
      const newList = [...prevState.todoList];
      newList.splice(index, 1);
      return { todoList: newList };
    });
  };

  render() {
    return (
      <div>
        <section>
          <input
            placeholder="Enter your task"
            onChange={(e) => {
              this.inputfield = e.target.value;
            }}
          />
          <button
            onClick={() => {
              this.setState({
                todoList: [...this.state.todoList, this.inputfield],
              });
            }}
          >
            Add
          </button>
        </section>
        <section>
          <ul>
            {this.state.todoList.map((todo, index) => (
              <li key={index}>
                {todo}{" "}
                <button onClick={() => this.handleDeleteItem(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
