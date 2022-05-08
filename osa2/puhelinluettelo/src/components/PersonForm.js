import { useState } from 'react';
import personService from '../services/persons';

const PersonForm = ({ persons, setPersons, setNotification,
    setNotificationStyle }) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const notifStyleAdd = {
        color: 'blue',
        fontSize: 20,
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'blue',
        padding: 10,
    }
    const notifStyleError = {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'red',
        borderStyle: 'solid',
        padding: 10,
    }
    const addNewPersonButton = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber
        }
        const person = persons.filter((person) =>
            person.name === newName);
        const changedPerson = { ...person[0], number: newNumber };
        if (changedPerson.id !== undefined) {
            console.log('changedPerson', changedPerson)
            if (window.confirm(`Do you want to update ${newName} number?`)) {
                personService
                    .update(changedPerson.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person =>
                            person.name !== newName ? person : returnedPerson))
                    })
                    .catch(error => {
                        setNotificationStyle(notifStyleError);
                        setNotification(`Person ${newName} does not exist`);

                        setTimeout(() => {
                            setNotification(null);
                        }, 5000)
                    });
            }
        } else {

            personService
                .create(personObject)
                .then(newPerson => {
                    setPersons(persons.concat(newPerson))
                    setNotificationStyle(notifStyleAdd)
                    setNotification(`Added ${newPerson.name}`)
                })
                .then(() => {
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000);
                })
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