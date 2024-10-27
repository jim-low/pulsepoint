import { Outlet } from "react-router-dom"
import Header from "./components/header"
import './App.css'

function App() {
  return (
    <div id='pulsepoint'>
      <div className="relative">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
