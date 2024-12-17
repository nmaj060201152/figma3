'use client';
import { useState } from "react";
import React from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <header className='flex justify-between items-center'>
        <div className="left flex space-around">
        <button className="text-black w-4 h-3 mt-1 gap-0 opacity-9" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        <h1>SHOP.CO</h1>
        </div>

        <div className="right flex space-around">
        <FaSearch/>
        <LuShoppingCart/>
            <RiAccountCircleLine/>
            <h1>Hello</h1>
        </div>

    </header>
  )
}

export default Navbar;