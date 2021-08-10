import { useEffect, useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { CountrySelector } from './components/CountrySelector/CountrySelector';
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

function App() {
  const [getData, setGetData] = useState([])

  useEffect(() => {
      async function fetchData() {
          const response = await axios.get(url)            
          const allData = {
              confirmed: response.data.confirmed,
              recovered: response.data.recovered,
              deaths: response.data.deaths,
              lastUpdate: response.data.lastUpdate
          }
          setGetData(allData)
      }
      return fetchData()
  }, [])
  console.log(getData)

  return (
    <div className="App">
     <h1>Covid-19 tracker!</h1>
     <div className="container">
      <Cards />
      <CountrySelector />
     </div>     
    </div>
  );
}

export default App;
