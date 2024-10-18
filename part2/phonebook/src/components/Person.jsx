const Person = ({ person, onDelete }) => {
    return (
        <div data-id={person.id}>
            {person.name}
            {person.number}
            <button onClick={onDelete}>delete</button>
        </div>
    )
}

export default Person