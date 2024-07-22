import React from "react";
import ContactRow from "./ContactRow";

const ContactList = ({ contacts, setSelectedContactId }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;