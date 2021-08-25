import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url} from '../../App';
import { Line, Bar } from 'react-chartjs-2';

import './style.css';

export function Charts({data, selectedCountry}) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetchDailyData() {
            const dailyResponse = await axios.get(`${url}/daily`)  
            setDailyData(dailyResponse.data)         
        }
        return fetchDailyData()
    }, [])

    const lineChart = (
        dailyData.length !== 0 ? (
            <Line data={{
                labels: dailyData.map((item) => {
                    return (item.reportDate)
                }),
                datasets: [{
                    data:dailyData.map((item) => {
                        return (item.confirmed.total)
                    }),
                    label: 'Infectados',
                    borderColor: '#b778ec',
                    fill: true
                }, {
                    data:dailyData.map((item) => {
                        return (item.deaths.total)
                    }),
                    label: 'Mortes',
                    borderColor: '#f12d2d',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }} />
        ) : null
    )

    const barChart = (
       typeof data.confirmed !== "undefined" ? (
            <Bar data={{
                labels: ['Infectados', 'Mortes'],
                datasets: [{
                    label: 'N° de Pessoas',
                    backgroundColor: ['#d0b4e8', '#f48c8c'],
                    data: [data.confirmed.value, data.deaths.value]
                }],
            }}
            options={{
                legend: {display: false},
            }}
             />) : null        
    )

    return (
        <section className="container chart-container">
            {selectedCountry.length !==0 ? barChart : lineChart}
        </section>
    )
} 