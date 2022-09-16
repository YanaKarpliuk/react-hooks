import { NavLink, Link } from "react-router-dom"

export default function MainPage() {
  return (
    <div>
      <ul>
        <li><NavLink to="/use-reducer-hook">useReducer</NavLink></li>
        <li><NavLink to="/use-memo-hook">useMemo</NavLink></li>
      </ul>
    </div>
  )
}