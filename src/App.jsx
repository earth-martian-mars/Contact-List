import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import Selected from './components/Selected';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const App = () => {
  const [contacts, setContacts] = useState(dummyContacts)
  const [selected, setSelected] = useState(null)
  const [refresh, setRefresh] = useState(false)
  console.log("Contacts:", contacts);

  useEffect(()=>{ //Collects API data on component mounting (on first run)
    async function getContacts() {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
      const result = await response.json()
      setContacts(result)
      console.log(result)
    }
    getContacts()
  },[refresh])

console.log("Page Refreshed")

  return (
    <>
    {
      selected ? <Selected selected={selected} setSelected={setSelected}/> :
      <ContactList contacts={contacts} setSelected={setSelected}/>
    }
    <button onClick={()=>setRefresh(!refresh)}>Refresh</button>
    </>
  )
}

export default App