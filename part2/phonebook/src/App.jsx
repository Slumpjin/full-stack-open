import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
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

  const handleSubmit = (e) => {
    e.preventDefault()

    const person = getPersonInPhonebookByName(newName)
    if (person !== undefined) {
      if (confirm(`${person.name} ${person.number} is already added to the phonebook, replace the old number with a new one?`)) {
        updatePerson(person)
      }
    }
    else {
      addPerson()
    }
    setNewName('')
    setNewPhoneNumber('')
    e.target.reset()
  }

  const handleDelete = (e) => {
    const elementId = e.target.parentElement.dataset.id
    const person = getPersonInPhonebook(elementId)

    if (person && confirm(`Delete ${person.name} from phonebook?`)) {
      phonebookService.remove(elementId)
        .then(data => {
          setSuccessNotification(`Successfully deleted ${person.name}`)
        })
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

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newPhoneNumber
    }
    phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessNotification(`Successfully added ${personObject.name}`)
      })
  }

  const updatePerson = (person) => {
    const updatedPersonObject = {
      ...person,
      number: newPhoneNumber
    }
    phonebookService
      .update(person.id, updatedPersonObject)
      .then(() => {
        setPersons(persons.map(p => p.id === person.id ? updatedPersonObject : p))
        setSuccessNotification(`Successfully updated ${updatedPersonObject.name}`)
      })
  }

  const getPersonInPhonebookByName = (name) => {
    return persons.find(person => person.name === name)
  }

  const getPersonInPhonebook = (id) => {
    return persons.find(person => person.id === id)
  }

  const setSuccessNotification = (message) => {
    setSuccessMessage(message)

    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }

  const setErrorNotification = (message) => {
    setErrorMessage(message)

    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
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