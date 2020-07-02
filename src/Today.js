import React from 'react'

const Today = ({temp, wind, conditions}) => (
    <section className="today_section">
        <div className="row">
            <div className="col-sm">
                <h3>Température</h3>
                <p>{ temp? temp + ' °C' : '' }</p>
            </div>
            <div className="col-sm">
                <h3>Vitesse du vent</h3>
                <p>{ wind? wind + ' km/h': '' }</p>
            </div>
            <div className="col-sm">
                <h3>Conditions</h3>
                <p>{ conditions }</p>
            </div>
        </div>
    </section>
)

export default Today