import React, { useState } from "react";
import "../css/useStateHook.css";

export default function UseState() {
  const boxes = [
    {
      id: 1,
      on: true,
    },
    {
      id: 2,
      on: false,
    },
    {
      id: 3,
      on: true,
    },
  ];

  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  const squareElements = squares.map((square) => {
    const styles = {
      backgroundColor: square.on ? "black" : "pink",
    };

    return (
      <div
        className="state-box"
        key={square.id}
        style={styles}
        onClick={() => toggle(square.id)}
      ></div>
    );
  });

  return (
    <div>
      <h2 className="section-title">useState</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>Returns a stateful value, and a function to update it.</li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
          <span className="code-naming">useState</span> gives me the opportunity to change the color of my boxes by
            updating the state value.
          </p>
          <p>
            The <span className="code-naming">useState</span> hook takes an initial state, <span className="code-naming">boxes</span>, and
            returns a pair of variables, <span className="code-naming">squares</span> and <span className="code-naming">setSquares</span>, where <span className="code-naming">squares</span> is the
            current state whereas <span className="code-naming">setSquares</span> is a function
            which updates it (from <span className="code-naming">true</span> to <span className="code-naming">false</span> and vice versa).
          </p>
          <p className="code-text">
          const &#123;squares, setSquares&#125; = <span className="code-text-blue">useState</span> (boxes);
          </p>
        </div>
        <div className="state-project">
          <p>Click on the boxes</p>
          <div className="box-container">{squareElements}</div>
          </div>
      </div>
    </div>
  );
}
