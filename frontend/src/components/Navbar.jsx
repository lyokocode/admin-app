import React from 'react'
import { AiOutlineSearch, AiOutlineFullscreen, AiOutlineUnorderedList } from "react-icons/ai"
import { MdLanguage, MdOutlineDarkMode, MdNotifications, MdChatBubble, MdLightMode } from "react-icons/md"
import "../styles/navbar.scss"

export function Navbar() {
    return (
        <nav className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <AiOutlineSearch className='icon' />
                </div>
                <ul className="items">
                    <li className="item">
                        <MdLanguage className='icon' />
                        English
                    </li>
                    <li className="item" >
                        <MdLightMode className='icon' />
                    </li>
                    <li className="item">
                        <AiOutlineFullscreen className='icon' />
                    </li>
                    <li className="item">
                        <MdNotifications className='icon' />
                        <div className="counter">1</div>
                    </li>
                    <li className="item">
                        <MdChatBubble className='icon' />
                        <div className="counter">2</div>
                    </li>
                    <li className="item">
                        <AiOutlineUnorderedList className='icon' />
                    </li>
                    <li className="item">
                        <img
                            src="https://avatars.githubusercontent.com/u/105174310?s=400&u=54659c2f9fa9dfdba5e78ab01982cc82b9e19d33&v=4"
                            alt="avatar"
                            className='avatar' />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
