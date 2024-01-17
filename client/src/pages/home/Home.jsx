import style from "./Home.module.scss"
import { Link } from "react-dom"
const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Мои предметы</h1>
        <div className={style.my_objects_block}>
          <div className={style.my_objects}>
            <button
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/choice"
              }}
              className={style.object_btn}
            >
              Физкультура
            </button>
          </div>
          <div className={style.add_object}>
            <p>Добавить предмет</p>
            <button className="plus_btn">
              <img src="/plus.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
