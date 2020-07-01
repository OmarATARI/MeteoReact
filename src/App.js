import React, { Component } from 'react'
import Today from "./Today";
import Day from "./Day";

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
        daystemp: {
            first: null,
            second: null,
            third: null,
            fourth: null,
            five: null
        },
        isLoading: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getCurrentDayData(this.city.value)
        this.getFuturDaysData(this.city.value).then(() => { console.log(this.state.daystemp) })
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

    async getFuturDaysData(city){
        this.setState({
            isLoading: true,
        })
        const call = await fetch(`${apiUrl}forecast?q=${city}&APPID=${apiKey}&lang=fr&units=metric`)
        const data = await call.json()

        this.setState({
            daystemp: {
              first: data.list[0].main.temp,
              second: data.list[1].main.temp,
              third: data.list[2].main.temp,
              fourth: data.list[3].main.temp,
              five: data.list[4].main.temp
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
                <Day title="Day +1 " temperature={this.state.daystemp.first}/>
                <Day title="Day +2 " temperature={this.state.daystemp.second}/>
                <Day title="Day +3 " temperature={this.state.daystemp.third}/>
                <Day title="Day +4 " temperature={this.state.daystemp.fourth}/>
                <Day title="Day +5 " temperature={this.state.daystemp.five}/>
            </>
        )
    }
}

export default App