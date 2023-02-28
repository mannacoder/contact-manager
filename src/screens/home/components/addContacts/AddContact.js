import React, { useState } from "react";
import "./AddContact.css";

const AddContact = ({ onAddContact }) => {
  const defaultFormData = {
    name: "",
    email: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onAddContact(formData);
      setLoading(false);
      setFormData(defaultFormData);
    }, 1000);
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="addContact ui main">
      <h2>Add Contact</h2>
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Enter name..."
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={onInputChange}
            required
          />
        </div>
        {/* <button type="submit" className="ui button blue">
          {loading ? <i className="loading spinner icon"></i> : "Add"}
        </button> */}
        {loading ? (
          <button className=" ui primary loading button">Add</button>
        ) : (
          <button type="submit" className="ui button blue">
            Add
          </button>
        )}
      </form>
    </div>
  );
};

export default AddContact;
