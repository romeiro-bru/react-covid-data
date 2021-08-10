import './App.scss';
import { Cards } from './components/Cards/Cards';
import { CountrySelector } from './components/CountrySelector/CountrySelector';

function App() {
  return (
    <div className="App">
     <h1>Hello tracker!</h1>
     <Cards />
     <CountrySelector />
    </div>
  );
}

export default App;
