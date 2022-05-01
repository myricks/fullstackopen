import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewNameButton = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    if (persons.filter(person =>
      person.name === newName).length > 0) {
      console.log(personObject.name);
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
    }
  }

  const nameFieldInput = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
            value={newName}
            onChange={nameFieldInput}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={addNewNameButton}
          >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )

}
export default App;
