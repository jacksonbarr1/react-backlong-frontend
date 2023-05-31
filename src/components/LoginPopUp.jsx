import CancelIcon from '../assets/cancel.svg'

const LoginPopUp = ({ onClose }) => {
    return (
        <div className="screen fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-gray-100/40 font-mono">
            <div className="column absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 flex flex-col w-1/5 bg-gray-200 border-2 border-gray-300 rounded">
                <div className="top-row flex flex-row justify-end p-2">
                    <button onClick={onClose}><img src={CancelIcon} className="h-4" alt="Cancel"/></button>
                </div>
                <div className="header-row flex flow-row justify-center p-2">
                    <h1 className="font-bold text-4xl">Log in</h1>
                </div>
                <div className="form flex flex-col  items-center gap-4 mb-10">
                    <input className="w-1/2 h-10 focus:bg-gray-100 focus:outline-none text-xl font-bold rounded-md"
                           type="text" placeholder="Email" />
                    <input className="w-1/2 h-10 focus:bg-gray-100 focus:outline-none text-xl font-bold rounded-md"
                           type="password" placeholder="Password" />
                    <button className="bg-blue-500 hover:bg-blue-600 font-bold w-1/3 rounded px-2 py-1 text-white"
                            type="submit">Log in</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPopUp;
