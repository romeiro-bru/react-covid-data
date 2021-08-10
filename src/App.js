import { Cards } from './components/Cards/Cards';
import { CountrySelector } from './components/CountrySelector/CountrySelector';

function App() {
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
