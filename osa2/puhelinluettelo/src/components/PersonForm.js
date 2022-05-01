import { useState } from 'react';

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addNewPersonButton = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (persons.filter(person =>
            person.name === newName).length > 0) {
            console.log(personObject.name);
            window.alert(`${newName} is already added to phonebook`);
        } else {
            setPersons(persons.concat(personObject));
            setNewName('');
            setNewNumber('');
        }
    }

    const nameFieldInput = (event) => {
        setNewName(event.target.value);
    }
    const numberFieldInput = (event) => setNewNumber(event.target.value);



    return (
        <form>
            <div>
                name: <input
                    value={newName}
                    onChange={nameFieldInput}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={numberFieldInput}
                />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={addNewPersonButton}
                >add</button>
            </div>
        </form>
    );
}
export default PersonForm;