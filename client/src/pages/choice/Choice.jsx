import style from "./Choice.module.css"

export default function Choice() {
  return (
    <div className={style.choice}>
      <div className={style.container}>
        <div className={style.choiceContentBlock}>
          <h1>Выбор урока</h1>
          <div className={style.choiceButtons}>
            <div className={style.number_lesson}>1</div>
            <div className={style.button_lesson}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = "/sabjects"
                }}
              >
                7в
              </button>
            </div>
          </div>
          <div className={style.choicerReturn}>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = "/"
                }}
              >
                Назад
              </button>
            </div>
            <div>
              <button>Добовить урок</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
