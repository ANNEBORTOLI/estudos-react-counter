import React from "react";
import { useState } from "react";

export function Counter() {
  let [counter, setCounter] = useState(0);

  const title = <h1>My Counter</h1>;
  function increase() {
    setCounter(() => counter++); // ++counter
  }

  function decrease() {
    setCounter(() => counter--); // -- counter
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>{title}</div>
        <h1>{counter}</h1>
        <div className="btn-container">
          <button onClick={increase}> + </button>
          <button onClick={decrease}> - </button>
        </div>
      </header>
    </div>
  );
}
