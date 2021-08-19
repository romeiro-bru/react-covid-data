import React, {useState, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import {url} from '../../App';
import './style.css';

export function CountrySelector() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchCountries() {
            const CountriesResponse = await axios.get(`${url}/countries`)  
            setCountries(CountriesResponse.data.countries)         
        }
        return fetchCountries()
    }, [])

    return(
        <FormControl className="country-form">
            <Select>
                <option value="">Global</option>
                {countries.map((country, index) => {
                    return (
                        <option key={index} value={country.name}>
                            {country.name}
                        </option>
                    )
                })}
            </Select>
        </FormControl>
    )
} 