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
        const response = await fetch("https://api.example.com/contacts"); // Replace with actual API endpoint
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const selectedContact = contacts.find(contact => contact.id === selectedContactId);

  return (
    <>
      {selectedContactId ? (
        <ContactDetails contact={selectedContact} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}