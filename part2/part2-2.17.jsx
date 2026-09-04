import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerons => {
        setPersons(initialPerons)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  const showNotification = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )

      if (!confirmUpdate) {
        return
      }

      const updatedPerson = {
        ...existingPerson,
        number: newNumber
      }

      personService
        .update(existingPerson.id, updatedPerson)
        .then(updatedPerson => {
          setPersons(persons =>
            persons.map(person =>
              person.id === existingPerson.id ? updatedPerson : person
            )
          )

          setNewName('')
          setNewNumber('')
          showNotification(`Edited ${updatedPerson.name}`)
        })
        .catch(error => {
          showNotification(
            `Informationof ${existingPerson.name} has already been removed from server`,
            'error'
          )
        })

        return
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons => persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        showNotification(`${returnedPerson.name} added to phonebook`, 'success')
      })
      .catch(error => {
        showNotification(
          'Something went wrong while adding the person',
          'error'
        )
      })
  }

  const deletePerson = id => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons => persons.filter(person => person.id !== id))
          showNotification(`${person.name} deleted`, 'success')
        })
        .catch(error => {
          showNotification(
            `Information of ${person.name} has already been removed from server`,
            'error'
          )
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const peopleToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} type={notificationType} />

      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons persons={peopleToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App