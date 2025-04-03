function Selected({selected, setSelected}) {
    return(
        <>
        <p>Name: {selected.name}</p>
        <p>Email: {selected.email}</p>
        <p>Phone: {selected.phone}</p>
        <button onClick={()=>setSelected(null)}>Back</button>
        </>
    )
}
export default Selected