import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredPersons = filter ? persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  useEffect(() => {
    phonebookService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newPhoneNumber
    }

    phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
  }

  const handleDelete = (e) => {
    const elementId = e.target.parentElement.dataset.id
    const person = getPersonInPhonebook(elementId)

    if (person && confirm(`Delete ${person.name} from phonebook?`)) {
      phonebookService.remove(elementId)
        .catch(error => {
          alert(`${person.name} was already deleted from the phonebook`)
        })
      setPersons(persons.filter(person => person.id !== elementId))
    }
  }

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
      addPerson()
    }
    setNewName('')
    setNewPhoneNumber('')
    e.target.reset()
  }

  const isPersonInPhonebook = () => {
    return persons.some(person => person.name === newName
      && person.number === newPhoneNumber)
  }

  const getPersonInPhonebook = (id) => {
    return persons.find(person => person.id === id)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onPhoneNumberChange={handlePhoneNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        persons={filteredPersons}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App