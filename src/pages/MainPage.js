import { NavLink, Link } from "react-router-dom"
import '../css/mainPage.css'

export default function MainPage() {
  return (
    <div>
      <ul className="main-list">
        <li><NavLink to="/use-reducer-hook" className="main-list-item">useReducer</NavLink></li>
        <li><NavLink to="/use-memo-hook" className="main-list-item">useMemo</NavLink></li>
      </ul>
    </div>
  )
}