import { useEffect, useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { Charts } from './components/Charts/Charts';
import { CountrySelector } from './components/CountrySelector/CountrySelector';
import axios from 'axios';

export const url = "https://covid19.mathdro.id/api";

function App() {
  const [data, setData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url)            
      const allData = {
        confirmed: response.data.confirmed,
        recovered: response.data.recovered,
        deaths: response.data.deaths,
        lastUpdate: response.data.lastUpdate
          }
          setData(allData)
        }
        return fetchData()
      }, [])
      
      const handleCountryChange = (country) => {
        setSelectedCountry(country)
        console.log(country)
    }
      return (
    <div className="App">
     <h1>Covid-19 tracker!</h1>
     <div className="container">
      <Cards data={data} />
      <CountrySelector  handleCountryChange={handleCountryChange} />
      <Charts />
     </div>     
    </div>
  );
}

export default App;
