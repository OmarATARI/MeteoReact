import React from 'react'

const Day = ({ title, temperature }) => (
    <div className="card">
            <div className="card-body">
                <h5 className="card-title"> { title }</h5>
                <p className="card-text"> { temperature? temperature + '°C': '' } </p>
            </div>
    </div>
)

export default Day