import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url} from '../../App';
import { Line } from 'react-chartjs-2';

import './style.css';

export function Charts() {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetchDailyData() {
            const dailyResponse = await axios.get(`${url}/daily`)  
            setDailyData(dailyResponse.data)         
            console.log(dailyData)
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
                    label: 'Infected',
                    borderColor: '#6666f3',
                    fill: true
                }, {
                    data:dailyData.map((item) => {
                        return (item.deaths.total)
                    }),
                    label: 'Deaths',
                    borderColor: '#f12d2d',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }} />
        ) : null
    )

    return (
        <section className="chart-container">
            {lineChart}
        </section>
    )
} 