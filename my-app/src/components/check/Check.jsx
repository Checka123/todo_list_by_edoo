

function Check({checked, onChange}){
    return(
        <input type="checkbox" 
            className="size-4 cursor-pointer"
            checked={checked}
            onChange={onChange}
        />
    )
}

export default Check