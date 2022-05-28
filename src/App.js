// import React, { useEffect } from "react";

// import "./App.css";
// // import TicTacToe from "./TicTacToe/TicTacToe";

// function App() {
//   //top level management
//   //inside function component
//   // useEffect(() => {
//   //   console.log("After rendering is done");
//   // }, []);
//   // //componentDidMount

//   return (
//     // <>
//     //   <h1>React is fun</h1>
//     // </>
//     <div className="container">
//       <TicTacToe />
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(2);

  //Similar to componentDidMount and componentDidUpdate
  //when array is empty it will only run once
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, []);

  //irrespective of array dependency it run always
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  //pass a dependency array

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  return (
    <div className="App">
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click Me </button>
    </div>
  );
}
