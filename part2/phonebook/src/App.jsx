import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName
    }
    if (persons.some(person => person.name === nameObject.name)) {
      window.alert(`${newName} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    e.target.reset()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.name}>{person.name}</div>)}
      </div>
    </div>
  )
}

export default App