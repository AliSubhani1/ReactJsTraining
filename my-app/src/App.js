import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const Home = () => (
  <h1>
    <Link to="/about">Click Me</Link>
  </h1>
);
const About = () => <h1>About Us</h1>;

function App() {
  // return (
  //   <Routes>
  //     <Route path="/" exact component={HomePage} />
  //     <Route path="/about" component={About} />
  //   </Routes>
  // );
  return (
    <div>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Routes>
    </div>
  );
  // return (
  //   <div>
  //     <HomePage></HomePage>
  //   </div>
  // );
}

export default App;
