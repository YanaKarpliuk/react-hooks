import React, { useState, useEffect } from "react";
import "../css/useEffectHook.css";

export default function UseEffectHook() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("clicked");
  }, [resourceType]);
  return (
    <div>
      <h2 className="section-title">useEffect</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>
              <span className="code-naming">
                useEffect(callback, dependencies)
              </span>{" "}
              is the hook that manages the side-effects in functional
              components. <span className="code-naming">callback</span> argument
              is a function to put the side-effect logic.{" "}
              <span className="code-naming">dependencies</span> is a list of
              dependencies of your side-effect: being props or state values
            </li>
            <li style={{ marginBottom: "0" }}>
              Effects can run after every completed render:
            </li>
            <p className="code-text" style={{ margin: "0 0 15px 0" }}>
              <span className="code-text-blue">useEffect</span>(() =&#62;
              &#123;&#125;)
            </p>
            <li style={{ marginBottom: "0" }}>
              Can be fired only when certain values have changed:
            </li>
            <p className="code-text" style={{ margin: "0 0 15px 0" }}>
              <span className="code-text-blue">useEffect</span>(() =&#62;
              &#123;&#125;, [
              <span className="code-text-yellow">certainValues</span>])
            </p>
            <li style={{ marginBottom: "0" }}>
              An empty dependencies array is used to invoke a side-effect once
              after component mounting:
            </li>
            <p className="code-text" style={{ margin: "0 0 15px 0" }}>
              <span className="code-text-blue">useEffect</span>(() =&#62;
              &#123;&#125;, [])
            </p>
            <li style={{ marginBottom: "0" }}>
              Run effect on mount and clean up on unmount:
            </li>
            <p className="code-text" style={{ margin: "0 0 15px 0" }}>
              <span className="code-text-blue">useEffect</span>(() =&#62; &#123;
              <br />
              &nbsp;&nbsp;const{" "}
              <span className="code-text-red">handleKeyDown</span> = e =&#62;
              console.log("keydown event: ", e);
              <br />
              &nbsp;&nbsp;document.
              <span className="code-text-violet">addEventListener</span>
              ("keydown", <span className="code-text-red">handleKeyDown</span>);
              <br />
              &nbsp;&nbsp;<span className="code-text-violet">return</span> ()
              =&#62; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;document.
              <span className="code-text-violet">removeEventListener</span>{" "}
              ("keydown", <span className="code-text-red">handleKeyDown</span>);
              <br/>&nbsp;&nbsp;&#125; 
              <br/>&#125;, [])
            </p>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
            In the example below, the function{" "}
            <span className="code-naming">console.log("clicked")</span> works
            every time we change the dependency{" "}
            <span className="code-naming">[resourceType]</span> by clicking the
            buttons.
          </p>
          <p>
            But it will not be fired if we click the same button twice because
            no changes are being performed.
          </p>
        </div>
        <div className="effects-hook">
          <div>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>
              Comments
            </button>
          </div>
          <h2>{resourceType}</h2>
        </div>
      </div>
    </div>
  );
}
