// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
const ToDoList = () => {
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>0</h1>
          <div className="btn_div">
            <button>Increment</button>
            <button>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
};
