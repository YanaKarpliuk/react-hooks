import { NavLink, Link } from "react-router-dom";
import "../css/mainPage.css";
import "../css/common.css";

export default function MainPage() {
  return (
    <div>
      <h2 className="section-title">
        Learning Hooks with&nbsp;
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="_blank"
          className="main-link"
        >
          React
        </a>
      </h2>
      <div className="section-container">
        <ul className="main-list">
          <li>
            <NavLink to="/use-reducer-hook" className="main-list-item">
              useReducer
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-memo-hook" className="main-list-item">
              useMemo
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-state-hook" className="main-list-item">
              useState
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-callback-hook" className="main-list-item">
              useCallback
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-context-hook" className="main-list-item">
              useContext
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-effect-hook" className="main-list-item">
              useEffect
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-imperative-handle-hook" className="main-list-item">
              useImperativeHandle
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-layout-effect-hook" className="main-list-item">
              useLayoutEffect
            </NavLink>
          </li>
          <li>
            <NavLink to="/use-ref-hook" className="main-list-item">
              useRef
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
