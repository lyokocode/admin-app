import React from 'react'
import "../styles/sidebar.scss"
import { MdDashboard, MdNotifications, MdSettingsSystemDaydream, MdOutlinePsychology, MdSettingsApplications, MdLogout } from "react-icons/md"
import { AiOutlineUser, AiFillCreditCard } from "react-icons/ai"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { FaTruck } from "react-icons/fa"
import { BiStats, BiUserCircle } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../store/authSlice'

export function Sidebar() {

    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.auth)
    console.log(auth)
    return (
        <aside className='sidebar'>
            <div className="top">
                <Link to="/">
                    <span className="logo">aelita</span>
                </Link>
            </div>
            <div className="hr"></div>
            <article className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <MdDashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <Link to="/users">
                        <li>
                            <AiOutlineUser className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <SiHomeassistantcommunitystore className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <AiFillCreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <FaTruck className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <BiStats className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <MdNotifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <MdSettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <MdSettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <BiUserCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <MdLogout className="icon" />
                        <button onClick={() => dispatch(setAuth())}>Logout</button>
                    </li>
                </ul>
            </article>
            <div className="bottom">
                <button className="color-option" ></button>
                <button className="color-option" ></button>
            </div>
        </aside>
    )
}
