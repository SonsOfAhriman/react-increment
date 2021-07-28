import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [counter, setCounter] = useState(0);

  function handleClickPlus(e) {
    setCounter(counter + 1);
    e.preventDefault();

  }

  function handleClickMinus(e) {
    setCounter(counter - 1);
    e.preventDefault();

  }

  return (
    <div>
      <div className="increment"> Value is {counter}</div>
      <a href="" type="button" onClick={handleClickPlus} className="button">Add</a>
      <a href="" type="button" style={{backgroundColor: "red"}} onClick={handleClickMinus} className="button">Subtract</a>
    </div>
  )


}

ReactDOM.render(<App />, document.querySelector("#root"));
