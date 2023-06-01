
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {useState} from "react";
import LoginPopUp from "./components/LoginPopUp.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    const handleLoginClick = () => {
        setShowLogin(!showLogin)
    }

    const handleLogin = (data) => {
        setIsLoggedIn(true)
        setUserData(data)
        handleLoginClick()
    }

  return (
    <div className="flex flex-col justify-center">
      <NavBar onLoginClick={handleLoginClick}></NavBar>
      content
        {showLogin && <LoginPopUp onClose={handleLoginClick} onLogin={handleLogin} ></LoginPopUp>}
    </div>
  )
}

export default App
