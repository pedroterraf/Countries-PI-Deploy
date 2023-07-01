import styles from './App.module.css'
import Home from "./views/Home/home"
import Form from "./views/Form/form"
import Detail from "./views/Detail/detail"
import Landing from "./views/Landing/landing"
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  return (
    <div className={styles.App}>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/activity" element={<Form/>} />
      </Routes>
    </div>
  )
}

export default App
