import style from "./ConfirmLesson.module.css"

export default function Confirmlesson() {
  return (
    <div className={style.reminders}>
      <div className={style.container}>
        <div className={style.remindersContent}>
          <h1>У вас есть заметка</h1>

          <div className={style.checkbox}>
            <h2>1 Заметка :</h2>
            <button>Выставить оценки</button>
          </div>
          <div className={style.back_buttons}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/"
              }}
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
