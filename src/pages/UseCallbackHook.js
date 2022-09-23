import React, { useCallback, useEffect, useState } from "react";
import "../css/useCallbackHook.css";

export default function UseCallbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  useEffect(() => {
    setItems(getItems());
    console.log("Updating");
  }, [getItems]);

  return (
    <div>
      <h2 className="section-title">useCallback</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>Returns a memoized callback.</li>
            <li>
              <span className="code-naming">useCallback(fn, deps)</span> is
              equivalent to{" "}
              <span className="code-naming">useMemo(() =&#62; fn, deps)</span>
            </li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
            The function in useEffect is called every time we change the number.
            But it is also triggered when we change the theme. And this is the
            problem that can be solved with useCallback.
          </p>
          <p>
            We added <span className="code-naming">number</span> as a dependency
            to useCallback. So from now on the function{" "}
            <span className="code-naming">getItems()</span> will be called
            only when the number is changed.
          </p>
        </div>
        <div style={theme} className="callback-project">
          <div>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value))}
              className="callback-input"
            />
            <button
              className="callback-btn"
              onClick={() => setDark((prevDark) => !prevDark)}
            >
              Toggle Theme
            </button>
          </div>
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
