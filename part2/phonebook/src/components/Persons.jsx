import Person from './Person'

const Persons = ({ persons, onDelete }) => {
    return (
        persons.map((person) => {
            return (
                <Person
                    key={person.id}
                    person={person}
                    onDelete={onDelete}
                />
            )
        })
    )
}

export default Persons