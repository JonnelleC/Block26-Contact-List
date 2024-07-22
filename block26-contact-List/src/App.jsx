import React, { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        ); // Replace with actual API endpoint
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <ol>
        {contacts.map((contact) => {
          return <li key={contact.id}>{/* contact= contact */}</li>;
        })}
      </ol>
      {selectedContactId ? (
        <ContactDetails
          contact={selectedContact}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}
