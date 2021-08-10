import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export function CountrySelector() {
    const [getData, setGetData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
            setGetData(response.data)
        }
        return fetchData()
    }, [])
    console.log(getData)

    return(
        <h1>Country selector</h1>
    )
} 