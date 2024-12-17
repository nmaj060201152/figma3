'use client';
import { link } from "fs";
import { useState } from "react";
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div  className="flex h-[66px] text-black justify-evenly items-center w-full sm:w-[390px] md:w-[1440px]">
            <div>
            <button className="text-black w-[18.75px] h-[14.25px] mt-[1px] ml-[2.63px] gap-0 opacity-100 block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

            </div>
            <div>
            <Link href="/"><h1 className="w-[6px] h-[18px] mt-[1px] ml-[6px] gap-0 opacity-100">SHOP.CO</h1>
        </Link>

            </div>
           
           
           
            <div className="w-[500px] hidden md:block">
            <ul className="flex ml-[2px]  items-center w-auto justify-evenly">
                    <li><Link href="/pages/shop">Shop</Link></li>
                    <li><Link href="/pages/onsale">On Sale</Link></li>
                    <li><Link href="/pages/arrivals">New Arrivals</Link></li>
                    <li><Link href="/pages/brand">Brands</Link></li>
                </ul>

            </div>
            <div className="w-[1%] md:w-[15%]">
                <input type="text" />
                </div>

                <div className="flex justify-evenly gap-3 w-auto">
<FaSearch/>
<LuShoppingCart/>
<RiAccountCircleLine/>
</div>


        </div>

        


  )
}

export default Navbar;