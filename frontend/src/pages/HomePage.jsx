import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../store/authSlice'

export function HomePage() {

    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.auth)
    console.log(auth)

    return (
        <div>
            <button onClick={() => dispatch(setAuth())}> {auth ? "çıkış yap" : "giriş yap"}</button>

        </div>
    )
}
