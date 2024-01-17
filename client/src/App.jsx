import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import Header from "./component/header/Header"
import Sabjects from "./pages/subjects/Sabjects"
import Choice from "./pages/choice/Choice"
import Attendance from "./pages/attendance/Attendance"
import Grade from "./pages/grade/Grade"
import Reminders from "./pages/reminders/Reminders"
import Confirmlesson from "./pages/confirmLesson/Confirmlesson"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sabjects" element={<Sabjects />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/confirmLesson" element={<Confirmlesson />} />
      </Routes>
    </>
  )
}

export default App
