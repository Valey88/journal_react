import { isValidElement } from "react"
import style from "./Attendance.module.css"

export default function Attendance() {
  return (
    <div className={style.attendance}>
      <div className={style.container}>
        <div className={style.tables_block}>
          <table className={style.table}>
            <thead className={style.tableHead}>
              <tr>
                <th>id</th>
                <th>ФИО ученика</th>
                <th>Посещаемость</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td>ФИО</td>
                <td>
                  <div className={style.dropdown}>
                    <select className={style.select2} id="Attendance">
                      <option value="Присутствовал">Присутствовал</option>
                      <option value="Отсутствовал">Отсутствовал</option>
                      <option value="Опоздал">Опоздал</option>
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
              window.location.href = "/grade"
            }}
          >
            Перейти к оцениванию
          </button>
        </div>
      </div>
    </div>
  )
}
