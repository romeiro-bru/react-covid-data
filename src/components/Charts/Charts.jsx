import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import {url} from '../../App';

export function Charts() {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        async function fetchDailyData() {
            const dailyResponse = await axios.get(`${url}/daily`)  
            setDailyData(dailyResponse)         
        }
        return fetchDailyData()
    })

    return(
        <h1>Charts</h1>
    )
} 