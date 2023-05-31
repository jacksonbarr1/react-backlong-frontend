import Logo from '../assets/Standard Collection 26.svg'

const NavBar = () => {
    return (
        <div className="flex flex-row bg-gray-200 py-2 px-8 font-mono items-center justify-between bg-cover md:flex-col
        md:gap-4 border-b-2 border-gray-300">
            <div className="left-group flex flex-row gap-20 md:flex-col md:gap-2">
                <div className="logo-group flex flex-row items-center">
                    <img className="h-12" src={Logo}/>
                    <h1 className="pl-2 text-4xl">Backlogger</h1>
                </div>

                <input type="text" className="rounded focus:bg-gray-100 focus:outline-none px-2" placeholder="Search" />
            </div>



            <div className="button-group flex flex-row gap-2" >
                <button className="bg-blue-500 hover:bg-blue-600 font-bold rounded px-2 py-1 text-white">Log In</button>
                <button className="bg-blue-500 hover:bg-blue-600 font-bold rounded px-2 py-1 text-white">Sign Up</button>
            </div>

        </div>
    )
}

export default NavBar;