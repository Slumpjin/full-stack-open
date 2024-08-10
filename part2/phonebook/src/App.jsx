import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredPersons = filter ? persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons
  const baseUrl = 'http://localhost:3001/persons'

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newPhoneNumber
    }

    axios.post(baseUrl, personObject)
      .then(response => response.data)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
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
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App