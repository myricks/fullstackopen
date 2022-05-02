const Button = ({ handleClick, country }) => {
    return (
        <button onClick={() => handleClick(country)}>show</button>
    );
}

const Countries = ({ countries, country, setCountry, setFilter }) => {

    const handleClick = (country) => {
        setCountry(country);
        setFilter(country.name.common);
    }

    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countries.length === 1) {
        setCountry(countries[0]);
        console.log(country.languages)
        return (
            <div>
                <h1>{country.name.common}</h1>
                capital: {country.capital}<br></br>
                area: {country.area}
                <h3>languages</h3>
                <ul>
                    {Object.keys(country.languages).map((key, i) => (
                        <li key={key}>{country.languages[key]}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt='flag of Finland' />
            </div>)
    } else {
        return (
            <div>
                {countries.map(country =>
                    <p key={country.name.common}>{country.name.common}
                        <Button handleClick={handleClick} country={country} />
                    </p>
                )}
            </div>)
    }
}
export default Countries;