const Persons = ({persons}) => {
    return (
        persons.map((person) => <div key={person.name}>{person.name} {person.phoneNumber}</div>)
    )
}

export default Persons