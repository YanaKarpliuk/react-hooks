import { NavLink, Link } from "react-router-dom";
import "../css/mainPage.css";
import "../css/common.css";

export default function MainPage() {
  return (
    <div>
      <h2 className="section-title">Learning React Hooks</h2>
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
        </ul>
      </div>
    </div>
  );
}
