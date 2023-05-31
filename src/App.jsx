
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {useState} from "react";
import LoginPopUp from "./components/LoginPopUp.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(false)

    const handleLoginClick = () => {
        setShowLogin(!showLogin)
    }

  return (
    <div className="flex flex-col justify-center">
      <NavBar onLoginClick={handleLoginClick}></NavBar>
      content
        {showLogin && <LoginPopUp onClose={handleLoginClick} ></LoginPopUp>}
    </div>
  )
}

export default App
