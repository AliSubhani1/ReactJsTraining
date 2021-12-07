import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [
        { name: "Frank", id: "ab1" },
        { name: "Dracula", id: "ab2" },
        { name: "Zombie", id: "ab3" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.Monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
