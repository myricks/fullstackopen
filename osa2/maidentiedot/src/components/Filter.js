const Filter = ({ filter, setFilter }) => {

    const handleChange = (event) => {
        setFilter(event.target.value);
    }
    return (
        <div>
            find countries:
            <input
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
}
export default Filter;