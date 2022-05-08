import personService from '../services/persons';

const Button = ({ person, handleClick }) => {
    return (
        <button
            type='submit'
            onClick={(event) => handleClick(event, person.id, person.name)}>
            delete
        </button>);
}

const Persons = ({ persons, setPersons }) => {
    const handleClick = (event, id, name) => {
        event.preventDefault();
        const updatedPersons = persons.filter(person => person.id !== id)
        if (window.confirm(`Do you want to delete ${name}?`)) {
            personService
                .removePerson(id)
                .then(() => setPersons(updatedPersons));
        }
    }

    return (
        <div>
            {persons.map(person =>
                <p key={person.name}>
                    {person.name} {person.number}
                    <Button person={person} handleClick={handleClick} />
                </p>)}
        </div>
    )
}
export default Persons