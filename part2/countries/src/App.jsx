import './App.css'
import { useState, useEffect } from 'react'
import CountryView from './components/CountryView.jsx'
import countriesService from './services/countries.js'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    console.log('fetching countries...')
    countriesService.getAll().then(countries => {
      console.log('countries received', countries)
      setCountries(countries)
    })
  }, [])

  useEffect(() => {
  }, [searchInput])

  const renderCountries = () => {
    const filteredCountries = countries
      .filter(country =>
        country.name.common.toLowerCase()
          .includes(searchInput.toLowerCase()))

    if (searchInput === '') { return }

    console.log('array length', filteredCountries.length)
    if (filteredCountries.length > 10) {
      return (
        <div>Too many matches, specify another filter</div>
      )
    }
    else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      return (
        <CountryView
          country={country}
        />
      )
    }

    return filteredCountries
      .map(country => <div key={country.cca3}>{country.name.common}</div>)
  }

  return (
    <div>
      find countries <input type="text" onChange={handleSearch} />
      {renderCountries()}
    </div>
  )
}

export default App
