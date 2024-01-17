import style from "./Header.module.scss"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/reminders">Напоминания</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
