import React, { useEffect } from 'react'
import { setAuth } from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
export function LoginPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { auth } = useSelector(state => state.auth)

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [auth])

    return (
        <div >
            <button onClick={() => dispatch(setAuth())}> {auth ? "çıkış yap" : "giriş yap"}</button>
        </div>
    )
}
