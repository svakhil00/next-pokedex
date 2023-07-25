"use client"
import Link from "next/link";

const Header = (props) => {
    return (
        <a href='../'>
            <h1 className="text-6xl font-bold text-center bg-red-600 text-white h-[10%]">Pokedex</h1>
        </a>
    )
}

export default Header;