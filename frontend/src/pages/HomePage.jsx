import React from 'react'
import { Navbar, Sidebar } from "../components"
export function HomePage() {

    return (
        <main className='home'>
            <Sidebar />
            <section className='homeContainer'>
                <Navbar />

            </section>
        </main>
    )
}
