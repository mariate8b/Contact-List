import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState({})
    useEffect(() => {async function fetchContact(){
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            console.log(result)
            setContact(result)
            console.log(setContact)
        } catch (error){
            console.error(error);
        }
        }
        fetchContact();
    }, []);
    return (
        <table> <button onClick={() => setSelectedContactId(null)}>Return</button> 
        <tr>
            <td><b>Name</b></td>
            <td><b>Username</b></td>
            <td><b>Website</b></td>
        </tr>
        <td>{contact.name}</td>
        <td>{contact.username}</td>
        <td>{contact.website}</td>
      </table>
    )
}