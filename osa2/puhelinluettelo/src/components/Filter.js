
const Filter = ({ filter, setFilter }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div>
            filter names: <input value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
}
export default Filter;