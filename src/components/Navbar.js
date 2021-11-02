import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-purple-700 py-3">
            <nav className="max-w-screen-lg mx-auto px-6 flex items-center">
                <div className="flex flex-grow">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img className="w-12" src="../../assets/logo.png" alt="logo" />
                        <h1 className="text-3xl text-white">AN Todo</h1>
                    </NavLink>
                </div>
                <div className="flex items-center space-x-3 text-xl text-white">
                    <NavLink to="/add" className="bg-white px-4 py-2 rounded-lg text-purple-800">Add todo</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
