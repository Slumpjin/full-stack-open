import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phoneNumber: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value)
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
        {persons.map((person) => <div key={person.name}>{person.name} {person.phoneNumber}</div>)}
      </div>
    </div>
  )
}

export default App