import React, {useState, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from 'axios';
import {url} from '../../App';
import './style.css';

export function CountrySelector({handleCountryChange}) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function fetchCountries() {
            const CountriesResponse = await axios.get(`${url}/countries`)  
            setCountries(CountriesResponse.data.countries)         
        }
        return fetchCountries()
    }, [])

    return(
        <section className="country-form">
            <FormControl>
                <NativeSelect onChange={(e) => handleCountryChange(e.target.value)} defaultValue="">
                <option value="global">Global</option>
                    {countries.map((country, index) => {
                        return (
                            <option key={index} value={country.name}>
                                {country.name}                               
                            </option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </section>
    )
} 