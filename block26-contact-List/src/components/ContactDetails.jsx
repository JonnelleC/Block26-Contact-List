import React from "react";



const ContactDetails = ({ contact, setSelectedContactId }) => {
  // if (!contact) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
};

export default ContactDetails;