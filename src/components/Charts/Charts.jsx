import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url} from '../../App';
import { Pie, Bar } from 'react-chartjs-2';

import IconButton from '@material-ui/core/IconButton';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';

import './style.css';

export function Charts({data, selectedCountry}) {
    const [dailyData, setDailyData] = useState([])
    const [toggleChart, setToggleChart] = useState(true)

    const handleToggleIcon = () => {
         setToggleChart(!toggleChart)
    }

    const toggleIconButton = (
        <IconButton onClick={handleToggleIcon} >
            {toggleChart ? <PieChartIcon fontSize="large" color="primary" /> : <BarChartIcon fontSize="large" color="primary" />}              
        </IconButton>
    ) 

    // fetched data to global chart
    useEffect(() => {
        async function fetchDailyData() {
            const dailyResponse = await axios.get(`${url}/daily`)  
            setDailyData(dailyResponse.data) 
        }
        return fetchDailyData()
    }, [])

    const globalBarChart = (
        dailyData.length !== 0 ? (
            <section className="globalbarchart-container">
            <Bar data={{
                labels: dailyData.map((item) => {
                    return (item.reportDate)
                }),
                datasets: [{
                    data:dailyData.map((item) => {
                        return (item.confirmed.total)
                    }),
                    label: 'Infectados',
                    backgroundColor: '#b778ec',
                    fill: true
                }, {
                    data:dailyData.map((item) => {
                        return (item.deaths.total)
                    }),
                    label: 'Mortes',
                    backgroundColor: '#f12d2d',
                    fill: true
                }]
            }} />
            </section>
        ) : null
    )

    const pieChart = (
       typeof data.confirmed !== "undefined" ? (
           <section className="pie-container">
            <Pie data={{
                labels: ['Infectados', 'Mortes'],
                datasets: [{
                    label: 'N° de Pessoas',
                    backgroundColor: ['#d0b4e8', '#f48c8c'],
                    borderColor: ['#c090e8', '#f57272'],
                    borderWidth: 2,
                    barThickness: 150,
                    data: [data.confirmed.value, data.deaths.value]
                }]
            }}
            
             />
             </section>) : null        
    )

    const barChart = (
        typeof data.confirmed !== "undefined" ? (
            <section className="bar-container">
             <Bar data={{
                 labels: ['Infectados', 'Mortes'],
                 datasets: [{
                     label: 'Infectados',
                     backgroundColor: ['#d0b4e8', '#f48c8c'],
                     borderColor: ['#c090e8', '#f57272'],
                     borderWidth: 2,
                     barThickness: 150,
                     data: [data.confirmed.value, data.deaths.value]
                 }]
             }}
             
              />
              </section>) : null        
     )

    return (
        <section className="container charts-container">
            {selectedCountry.length !==0 ? toggleIconButton : globalBarChart}
            {toggleChart ? pieChart : barChart}
        </section>
    )
} 