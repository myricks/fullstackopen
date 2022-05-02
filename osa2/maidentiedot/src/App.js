import axios from 'axios';
import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, []);

  const filteredCountries = countries.filter(country => country.name.common
    .toLowerCase()
    .includes(filter.toLowerCase()));

  console.log(filteredCountries);
  console.log('respone', countries.length, 'countries');

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App;
