import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredPersons = filter ? persons.filter((person) => 
    person.name.toLowerCase().includes(filter.toLowerCase())) 
    : persons


  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isPersonInPhonebook()) {
      window.alert(`${newName} ${newPhoneNumber} is already added to the phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        phoneNumber: newPhoneNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewPhoneNumber('')
    e.target.reset()
  }

  const isPersonInPhonebook = () => {
    return persons.some(person => person.name === newName
                  && person.phoneNumber === newPhoneNumber)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input onChange={handleFilterChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input required onChange={handleNameChange} />
        </div>
        <div>
          number: <input required onChange={handlePhoneNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => <div key={person.name}>{person.name} {person.phoneNumber}</div>)}
      </div>
    </div>
  )
}

export default App