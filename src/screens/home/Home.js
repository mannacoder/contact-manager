import React, { useState } from "react";
import AddContact from "./components/addContacts/AddContact";
import ContactList from "./components/contactList/ContactList";
import Navbar from "./components/navbar";
import "./Home.css";

const Home = () => {
  const [allContacts, setAllContacts] = useState([]);
  const handleAddContact = async (newContact) => {
    setAllContacts((prevContacts) => [newContact, ...prevContacts]);
  };
  const handleDeleteContact = (taskId) => {
    setAllContacts((prevContacts) =>
      prevContacts.filter((value, index) => index !== taskId)
    );
  };
  const handleUpdateContact = ({ index, newEmail }) => {
    setAllContacts((prevContacts) =>
      prevContacts.map((contact, ind) =>
        ind === index ? { ...contact, email: newEmail } : contact
      )
    );
  };
  return (
    <div className="HomeScreen">
      <Navbar />
      <div className="main-div">
        <div className="sidebar">
          <AddContact onAddContact={handleAddContact} />
        </div>
        <div className="contact-section">
          <ContactList
            onDeleteContact={handleDeleteContact}
            onUpdateContact={handleUpdateContact}
            allContacts={allContacts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
