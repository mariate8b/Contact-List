import React, { useState } from 'react';


const ContactList = () => {
  const dummyContacts = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678' },
    { name: 'Sam Johnson', email: 'sam.johnson@example.com', phone: '555-8765' }
  ];

  const [contacts, setContacts] = useState(dummyContacts);

  console.log("Contacts: ", contacts);

  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <ContactRow key={index} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function ContactRow({ contact }) {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
