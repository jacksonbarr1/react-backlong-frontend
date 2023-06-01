
import './App.css'
import NavBar from "./components/NavBar.jsx";
import {useState} from "react";
import LoginPopUp from "./components/LoginPopUp.jsx";
import SignupPopUp from "./components/SignupPopUp.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    const handleLoginClick = () => {
        setShowLogin(!showLogin)
    }

    const handleSignupClick = () => {
        setShowSignup(!showSignup)
    }

    const handleLogin = (data) => {
        setIsLoggedIn(true)
        setUserData(data)
        handleLoginClick()
    }

    const handleSignup = () => {
        handleSignupClick()
    }

  return (
    <div className="flex flex-col justify-center">
      <NavBar onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} isLoggedIn={isLoggedIn}></NavBar>
      content
        {showLogin && <LoginPopUp onClose={handleLoginClick} onLogin={handleLogin}></LoginPopUp>}
        {showSignup && <SignupPopUp onClose={handleSignupClick} onSignup={handleSignup}></SignupPopUp>}
    </div>
  )
}

export default App
