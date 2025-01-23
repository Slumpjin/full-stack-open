const CountryView = (props) => {
    const { country } = props

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            {Object.entries(country.languages).map(([key, language]) => <li key={key}>{language}</li>)}
            <div>{country.flag}</div>
            <img src={country.flags.svg} alt={country.flags.alt} height={100} width={200} />
        </div>
    )
}

export default CountryView