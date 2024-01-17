import style from "./Sabjects.module.css"

export default function Sabjects() {
  return (
    <div className={style.Sabjects}>
      <div className={style.container}>
        <h1>Темы для урока</h1>
        <div className={style.contentBlock}>
          <div className={style.contentBlockButtons}>
            <button
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/attendance"
              }}
            >
              Инструктаж по охране труда. Высокий старт.
            </button>
            <button>Развитие скоростных способностей. Прыжок с места.</button>
            <button>Низкий старт – техника. Кроссовая подготовка.</button>
            <button>
              Прыжок с места – зачёт. Развитие специальной выносливости.
            </button>
          </div>
          <div className={style.add_object}>
            <p>Добавить предмет</p>
            <button className="plus_btn">
              <img src="/plus.png" alt="" />
            </button>
          </div>
          <div className={style.return}>
            <button
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/choice"
              }}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
