import React from "react";
import { useUser } from "./UseContextHookPartials/userContext";
import "../css/useContextHook.css";

export default function UseContextHook() {
  const { isLoggedIn, userName, logIn, logOut } = useUser();

  return (
    <div>
      <h2 className="section-title">useContext</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>
              Data is passed from top to bottom via props, but this can be
              inconvenient for certain global data that is required by many
              components at different levels in the application. Context
              provides a way to pass data deep down the component tree without
              having to explicitly pass props to intermediate components
              manually at each level.
            </li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>
            For this project, we created a custom hook to access the context -
            userContext.js. It stores information about the current state of the
            user - login status and personal information.
          </p>
          <p>
            Then we wrapped the entire component tree with{" "}
            <span className="code-naming">UserProvider</span> taken from
            userContext.js.
          </p>
          <p className="code-text">
            <span className="code-text-red">const</span> root = ReactDOM.
            <span className="code-text-blue">createRoot</span> (document.
            <span className="code-text-blue">getElementById</span>
            ("root")).<span className="code-text-blue">render</span>(
            <br />
            &nbsp;&nbsp;&#060;<span className="code-text-yellow">UserProvider</span>&#062;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#060;App /&#062;
            <br />
            &nbsp;&nbsp;&#060;/<span className="code-text-yellow">UserProvider</span>&#062;
            <br />
            );
          </p>
          <p>
            In UseContextHook.js, we used our custom <span className="code-naming">useUser</span> hook to access the
            context value.
          </p>
        </div>
        <div className="useContext-project">
          <p>Click the button</p>
          {isLoggedIn ? (
            <button onClick={logOut} className="useContext-project-btn">Log out</button>
          ) : (
            <button onClick={logIn} className="useContext-project-btn">Log in</button>
          )}
          {isLoggedIn && <p>{userName}</p>}
        </div>
      </div>
    </div>
  );
}
