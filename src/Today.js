import React from 'react'

const Today = ({temp, wind, conditions}) => (
    <section className="today_section">
        <div>
            <h1>Aujourd'hui</h1>

            <h3>Température</h3>
            <p>{ temp } °C</p>
            <h3>Vitesse du vent</h3>
            <p>{ wind } km/h</p>
            <h3>Conditions</h3>
            <p>{ conditions }</p>
        </div>
    </section>
)

export default Today