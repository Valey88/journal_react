import style from "./Grade.module.css"

export default function Grade() {
  return (
    <div className={style.grade}>
      <div className={style.container}>
        <div className={style.tables_block}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>id</th>
                <th>ФИО ученика</th>
                <th>Критерии Оценивания</th>
                <th>Оценки</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td>ФИО</td>
                <td>
                  <div className={style.dropdown}>
                    <select className={style.select2} id="selectValue">
                      <option value="--"></option>
                      <option value="Подача мяча">Подача мяча</option>
                      <option value="Прием мяча">Прием мяча</option>
                      <option value="Подтягивания">Подтягивания</option>
                      <option value="Приседания">Приседания</option>
                      <option value="Отжимания">Отжимания</option>
                      <option value="Пресс">Пресс</option>
                      <option value="Бег">Бег</option>
                      <option value="Кросс">Кросс</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className={style.dropdown}>
                    <select className={style.select} id="selectValue">
                      <option value="-"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.attendanceButton}>
          <button
            className={style.dropbtn}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "/confirmLesson"
            }}
          >
            Завершить урок
          </button>
        </div>
      </div>
    </div>
  )
}
