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

    return (
        <section className="container chart-container">
            {lineChart}
        </section>
    )
} 