import {useState} from "react";
import AuthService from "../services/AuthService.js";
import CancelIcon from "../assets/cancel.svg";

const SignupPopUp = ({ onClose, onSignup }) => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await AuthService.register(email, username, password)
            if (response.status === 201) {
                onSignup()
            }
        } catch (e) {
            console.error(e)
        }
    }



    return (
        <div className="screen fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-100/40 font-mono">
            <div className="column absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4
            md:-translate-y-1/2 flex flex-col w-1/5 bg-gray-200 border-2 border-gray-300 rounded sm:w-3/5 md:w-2/5">
                <div className="top-row flex flex-row justify-end p-2">
                    <button onClick={onClose}><img src={CancelIcon} className="h-4" alt="Cancel"/></button>
                </div>
                <div className="below-cancel flex flex-col">
                    <div className="header-row flex flow-row justify-center p-2">
                        <h1 className="font-bold text-4xl text-center whitespace-nowrap">Register</h1>
                    </div>
                    <div className="form flex flex-col items-center gap-4 mb-5">
                        <input className=" h-10 lg:w-3/4 lg:text-sm focus:bg-gray-100 focus:outline-none rounded-md"
                               type="text" placeholder="Email" onChange={handleEmailChange} />
                        <input className=" h-10 lg:w-3/4 lg:text-sm focus:bg-gray-100 focus:outline-none rounded-md"
                               type="text" placeholder="Username" onChange={handleUsernameChange} />
                        <input className=" h-10 lg:w-3/4 lg:text-sm focus:bg-gray-100 focus:outline-none rounded-md"
                               type="password" placeholder="Password" onChange={handlePasswordChange}/>
                        <button className="lg:w-1/2  xl:w-3/4 bg-blue-500 hover:bg-blue-600 font-bold w-1/3 rounded px-2 py-1 text-white mt-5"
                                type="submit" onClick={handleSubmit}>Sign up</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupPopUp