import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { Card } from "./components/card/card.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ Monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList Monsters={this.state.Monsters}></CardList>
      </div>
    );
  }
}

export default App;
