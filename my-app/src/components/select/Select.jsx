

function Select({onChange}) {
    return (
        <select name="select" className="bg-white border border-gray-300 py-2 rounded-lg m-3 px-4" defaultValue={"All"} onChange={(e)=> onChange(e.target.value)}>
        <option value="all" >All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
        </select>
    )
}

export default Select
