const Filter = ({ filter, handleFilterChange }) => {
    return(
        <div>
            <label htmlFor="filter">
                filter shown with
            </label>
            <input 
                id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter