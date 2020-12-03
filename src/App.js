import './App.css';
import CityContext from './contexts/CityContext'
import CitySearch from './components/CitySearch';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Paris')
  return (
    <div className="App">
      <CityContext.Provider value={{city, setCity}}>
       <CitySearch />
      </CityContext.Provider>
    </div>
  );
}

export default App;
