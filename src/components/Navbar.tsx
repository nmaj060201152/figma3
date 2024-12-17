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
        <div  className="flex w-auto h-[66px] text-white justify-between items-center bg-green-600 md:bg-red-600">
            <div>
            <button className="text-black w-[18.75px] h-[14.25px] mt-[1px] ml-[2.63px] gap-0 opacity-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

            </div>
            <div>
            <Link href="/"><h1 className="w-[126px] h-[18px] mt-[1px] ml-[56px] gap-0 opacity-100">SHOP.CO</h1>
        </Link>

            </div>
            <div>
            <ul className="flex ml-[2px] justify-between w-[20px]">
                    <li><Link href="/pages/shop">Shop</Link></li>
                    <li><Link href="/pages/onsale">On Sale</Link></li>
                    <li><Link href="/pages/arrivals">New Arrivals</Link></li>
                    <li><Link href="/pages/brand">Brands</Link></li>
                </ul>

            </div>
            <div>
                <input  type="text" />
                </div>

                <div>
<FaSearch/>
<LuShoppingCart/>
<RiAccountCircleLine/>
</div>


        </div>

        


  )
}

export default Navbar;