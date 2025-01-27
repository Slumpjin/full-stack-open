import { useState, useEffect } from 'react'
import CountryView from './CountryView'

const Country = (props) => {
    const { country, searchInput } = props
    const [show, setShow] = useState(false)

    useEffect(() => { setShow(false) }, [searchInput])

    return (
        <>
            <div
                key={country.cca3}>{country.name.common}
                <button onClick={() => setShow(!show)}>show</button>

                {show && <CountryView country={country} />}
            </div>
        </>
    )
}

export default Country