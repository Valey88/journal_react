import style from "./Reminders.module.css"
import { Link } from "react-router-dom"
export default function Reminders() {
  return (
    <div className={style.reminders}>
      <div className={style.container}>
        <div className={style.remindersContent}>
          <h1>Добавить заметку</h1>

          <div className={style.checkbox}>
            <h2>1 Заметка :</h2>
            <button>Выставить оценки</button>
          </div>
          <div className={style.back_buttons}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/reminders"
              }}
            >
              Добавить заметку
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
