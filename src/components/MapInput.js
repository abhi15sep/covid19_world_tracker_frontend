import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import DisplayMapData from '../d3/DisplayMapData'
import DrawMap from '../d3/DrawMap'



const MapInput = () => {
    // disable button that is clicked / re-enable when another button is clicked
    // remove data layer when a new button is clicked
    const [countryResults, setCountryResults] = useState([])

    useEffect( () => {

        async function fetchData() {
            await fetch('https://corona.lmao.ninja/v2/countries')
            .then(response => response.json())
            .then(data => {
                setCountryResults(data)
            })
        }
        fetchData();

        // DrawMap(); 

    }, [])

    return (
        <span>
            <Button onClick={event => DrawMap(event.target.value, countryResults)} value="population">Population</Button>
            {/* <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="cases">Total Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="active">Active Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="critical">Critical Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="deaths">Total Deaths</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="recovered">Recovered Cases</Button>

            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="tests">Number of Tests</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="todayCases">New Cases Today</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="todayDeaths">New Deaths Today</Button>

            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="casesPerOneMillion">Total Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="activePerOneMillion">Active Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="criticalPerOneMillion">Critical Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="deathsPerOneMillion">Deaths Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="recoveredPerOneMillion">Recovered Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, countryResults)} value="testsPerOneMillion">Tests Per One Million</Button> */}
        </span>
    )
}

export default MapInput