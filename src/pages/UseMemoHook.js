import React from "react";
import { useState, useMemo, NavLink } from "react";
import "../css/useMemoHook.css";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "#a8a6a6",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <h2 className="section-title">useMemo</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>Returns a memoized value.</li>
            <li>
              Will only recompute the memoized value when one of the
              dependencies has changed. This optimization helps to avoid
              expensive calculations on every render.
            </li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
            In the example below we have{" "}
            <span className="code-naming">slowFunction()</span>. It works every
            time we change the number in the input. But we don't need this
            function to work in other cases because it will slow the rendering
            of the page.
          </p>
          <p>
            And this is where <span className="code-naming">useMemo</span> comes
            in handy. All we have to do is to pass <span className="code-naming">slowFunction()</span> and dependencies
            to <span className="code-naming">useMemo</span> like here:
          </p>
          <p className="code-text">
            <span className="code-text-violet">const</span> doubleNumber ={" "}
            <span className="code-text-blue">useMemo</span>(() =&#62;{" "}
            &#123;return <span className="code-text-blue">slowFunction</span>
            (number)&#125;, [number]);
          </p>
          <p>
            As a result, the theme changes without any delay and{" "}
            <span className="code-naming">slowFunction()</span>
            works only when we change the input value.
          </p>
        </div>
        <div className="memo-project">
          <div className="memo-top">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value))}
            ></input>
            <button onClick={() => setDark((prev) => !prev)}>
              Change Theme
            </button>
          </div>
          <div className="memo-bottom">
            <div style={themeStyles}>No delay here</div>
            <p>{doubleNumber} with delay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
