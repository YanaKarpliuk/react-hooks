import React, { useState, useEffect, useRef } from "react";
import "../css/useRefHook.css";

export default function UseRefHook() {
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [nameC, setNameC] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef()
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    prevName.current = nameC
  }, [nameC])

  return (
    <div>
      <h2 className="section-title">useRef</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <p className="code-text">
              <span className="code-text-violet">const</span> value ={" "}
              <span className="code-text-blue">useRef</span>(0)
            </p>
            <li>
              returns a mutable ref object - &#123; current: 0 &#125; as in the
              case above
            </li>
            <li>
              does not cause your component to reupdate when it gets changed
            </li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
            In the project below, we want to see how many times the component
            was rerendered while typing.
          </p>
          <p>
            In useEffect we added a function that adds +1 to renderCount value
            (that was set with useRef) with each rendering.
          </p>
          <p>
            The component rendering is caused by typing that changes the state.
          </p>
        </div>
        <div className="useRef-project">
          <input value={nameA} onChange={(e) => setNameA(e.target.value)} />
          <div>My name is {nameA || '_'}</div>
          <div>I rendered {renderCount.current} times</div>
        </div>
        <p>The following use case is the most common:</p>
        <div className="useRef-project">
          <input ref={inputRef} value={nameB} onChange={(e) => setNameB(e.target.value)} />
          <div>My name is {nameB || '_'}</div>
          <button className="useRef-btn" onClick={focus}>Focus the input</button>
        </div>
        <p>useRef can also store the previous value of state:</p>
        <div className="useRef-project">
          <input value={nameC} onChange={(e) => setNameC(e.target.value)} />
          <div>My name is {nameC || '_'} and it used to be {prevName.current || '_'}</div>
        </div>
      </div>
    </div>
  );
}
