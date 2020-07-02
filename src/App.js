import React, { Component } from 'react'
import Today from "./Today";
import Day from "./Day";
import SearchBar from "./SearchBar"

const apiUrl = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '2bc508e7c2711e20c21ba930d4e12dee'

class App extends Component{
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
        this.getFuturDaysData(this.city.value)
    }

    async getCurrentDayData(city){
        try{
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
        }catch (e) {
            console.log(`error: ${e}`)
        }
    }

    async getFuturDaysData(city){
        try {
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
        }catch (e) {
            console.log(`error: ${e}`)
        }

    }

    render() {
        return(
            <>
                <SearchBar
                    handleSubmission={(e) => this.handleSubmit(e)}
                    obj={this}
                />
                <Today
                temp={this.state.today.temp}
                wind={this.state.today.wind}
                conditions={this.state.today.conditions}
                />
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <Day title="Day +1 " temperature={this.state.daystemp.first}/>
                    </div>
                    <div className="p-2">
                        <Day title="Day +2 " temperature={this.state.daystemp.second}/>
                    </div>
                    <div className="p-2">
                        <Day title="Day +3 " temperature={this.state.daystemp.third}/>
                    </div>
                    <div className="p-2">
                        <Day title="Day +4 " temperature={this.state.daystemp.fourth}/>
                    </div>
                    <div className="p-2">
                        <Day title="Day +5 " temperature={this.state.daystemp.five}/>
                    </div>
                </div>
            </>
        )
    }
}

export default App