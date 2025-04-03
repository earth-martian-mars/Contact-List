function ContactRow({contact, setSelected}) {
    console.log(contact)
    return(
        <>
        <tr onClick={()=>setSelected(contact)}>
          <td>Name: {contact.name}</td>
          <td>Email: {contact.email}</td>
          <td>Phone: {contact.phone}</td>
        </tr>
        </>
    )
}
export default ContactRow