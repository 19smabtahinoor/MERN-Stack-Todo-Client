import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-purple-700 py-3">
            <nav className="max-w-screen-lg mx-auto px-6 flex items-center">
                <div className="flex flex-grow">
                    <h1 className="text-3xl text-white">AN Todo</h1>
                </div>
                <div className="flex items-center space-x-3 text-xl text-white">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">Add todo</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
