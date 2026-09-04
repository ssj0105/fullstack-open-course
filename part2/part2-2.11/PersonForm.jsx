const PersonForm = ({
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange
}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                <label htmlFor="name">
                    name:
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                    autoComplete="name"
                />
            </div>
            <div>
                <label htmlFor="number">
                    number:
                </label>
                <input 
                    id="number"
                    name="number"
                    type="text"
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm