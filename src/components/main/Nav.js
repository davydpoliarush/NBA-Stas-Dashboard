import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <header className="px-2 bg-gray-200 flex w-full py-1">
        <nav className="">
        <Link to="/"><h1 className="text-2xl text-blue-600  tracking-wide">HooptyDo</h1></Link>
        </nav>
    </header>
    )
}

export default Nav