import React from 'react'
import SearchBar from "./SearchBar";

const Today = () => (
    <section className="today_section">
        <div>
            <h1>Température</h1>
            <h2>{ SearchBar.state.today.temp }</h2>
        </div>
    </section>
)

export default Today