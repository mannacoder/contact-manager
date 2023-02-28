import React from "react";
import SingleContact from "./components/SingleContact";

const ContactList = ({ allContacts, onDeleteContact, onUpdateContact }) => {
  return (
    <div>
      {allContacts.length !== 0 ? (
        allContacts.map((data, index) => (
          <SingleContact
            key={index}
            data={data}
            index={index}
            onDeleteContact={onDeleteContact}
            onUpdateContact={onUpdateContact}
          />
        ))
      ) : (
        <h1>No Saved Contacts</h1>
      )}
    </div>
  );
};

export default ContactList;
