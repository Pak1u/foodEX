"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navitem";

const NavList = [
    { text: "Home", href: "/", active: true },
    { text: "Order", href: "/order", active: false },
    { text: "Contact", href: "/contact", active: false },
    // { text: "", href: "/contact", active: false },
]


const NavBar  =() =>{
    const [listno, setlistno] = useState(0);
    const [activeL,setactive] = useState(false);
    return (
        <header> 
            <nav className = {`nav bg-white shadow-md`}>
                <div className = {`container mx-auto`}>
                    <ul className = {`flex space-x-8 p-4`}>
                        {NavList.map((item,idx)=> (
                            <NavItem 
                                key = {idx} 
                                text = {item.text} 
                                href = {item.href} 
                                active = {item.active}   
                            />
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;