import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons);
      })
  }, []);

  const [filter, setFilter] = useState('');

  const personsToShow = persons.filter(person =>
    person.name.toUpperCase().includes(filter.toUpperCase()))
  console.log(personsToShow)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )

}
export default App;
