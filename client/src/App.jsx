import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Header from './component/header/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
