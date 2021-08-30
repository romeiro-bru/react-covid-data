import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url} from '../../App';
import { Line, Pie, Bar } from 'react-chartjs-2';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';

import './style.css';

export function Charts({data, selectedCountry}) {
    const [dailyData, setDailyData] = useState([])
    const [toggle, setToggle] = useState(true)

    const handleToggleIcon = () => {
         setToggle(!toggle)
    }

    const toggleIconButton = (
       <>
       <List>
            <ListItem >
                <ListItem button onClick={handleToggleIcon}>
                    {toggle ? <PieChartIcon color="primary" /> : <BarChartIcon color="secondary" />}              
                </ListItem>
            </ListItem>
        </List>
       </>
    ) 

    useEffect(() => {
        async function fetchDailyData() {
            const dailyResponse = await axios.get(`${url}/daily`)  
            setDailyData(dailyResponse.data)         
        }
        return fetchDailyData()
    }, [])

    const lineChart = (
        dailyData.length !== 0 ? (
            <section className="linechart-container">
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

    return (
        <section className="container">
            {selectedCountry.length !==0 ? toggleIconButton : lineChart}
            {toggle ? pieChart : barChart}
        </section>
    )
} 