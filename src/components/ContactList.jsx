import ContactRow from "./ContactRow"

function ContactList({contacts, setSelected}) {
    return(
        <>
         <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/Name/:</td>
              <td>/Email/:</td>
              <td>/Phone/:</td>
            </tr>
            {
                contacts.map((contact)=>(
                    <div>
                    <ContactRow contact={contact} setSelected={setSelected}/>
                    <hr/>
                    </div>
                ))
             }
          </tbody>
        </table>
        </>
    )
}
export default ContactList