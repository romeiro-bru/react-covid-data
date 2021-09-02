import { useEffect, useState } from 'react';
import { CountryTable } from './components/CountryTable/CountryTable';
import { Charts } from './components/Charts/Charts';
import { CountrySelector } from './components/CountrySelector/CountrySelector';
import axios from 'axios';

export const url = "https://covid19.mathdro.id/api";

function App() {
  const [data, setData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  
  const handleCountryChange = (country) => { 
    setSelectedCountry(country)  
  }

  useEffect(() => {
    async function fetchData() {
      let fetchSelectedCountryData = `${url}/countries/${selectedCountry}`

        const response = await axios.get(fetchSelectedCountryData)            
        const allData = {
          confirmed: response.data.confirmed,
          recovered: response.data.recovered,
          deaths: response.data.deaths,
          lastUpdate: response.data.lastUpdate
        }
        setData(allData)
    }
    return fetchData()
  }, [selectedCountry])
  

      return (
    <div className="App">
     <h1>Covid-19 tracker!</h1>
     <div className="container">
      <CountryTable data={data} selectedCountry={selectedCountry} />
      <CountrySelector handleCountryChange={handleCountryChange} />
      <Charts data={data} selectedCountry={selectedCountry} />
     </div>     
    </div>
  );
}

export default App;
