import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification'
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState({});
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
  console.log('personstoshow', personsToShow)
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} style={notificationStyle} />
      <br></br>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
        setNotificationStyle={setNotificationStyle}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow}
        setPersons={setPersons}
        setNotification={setNotification}
        setNotificationStyle={setNotificationStyle}
      />
    </div>
  )

}
export default App;
