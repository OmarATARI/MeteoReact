import React, { Component } from 'react'
import Today from "./Today";

const apiUrl = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '2bc508e7c2711e20c21ba930d4e12dee'

class App extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        today: {
            temp: null,
            conditions: '',
            wind: null
        },
        isLoading: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getCurrentDayData(this.city.value)
    }

    async getCurrentDayData(city){
        this.setState({
            isLoading: true,
        })
        const call = await fetch(`${apiUrl}weather?q=${city}&APPID=${apiKey}&lang=fr&units=metric`)
        const data = await call.json()

        this.setState({
            today: {
                conditions: data.weather[0].description,
                temp: data.main.temp,
                wind: data.wind.speed
            },
            isLoading: false
        })
    }

    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ville :
                    <input type="text" ref={ (c) => this.city = c } name="input_city"/>
                </label>
                <input type="submit" value="Rechercher" />
            </form>
                <Today
                temp={this.state.today.temp}
                wind={this.state.today.wind}
                conditions={this.state.today.conditions}
                />
            </>
        )
    }
}

export default App