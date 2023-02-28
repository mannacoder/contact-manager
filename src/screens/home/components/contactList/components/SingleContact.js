import React, { useState } from "react";
import Modal from "react-modal";
import "./SingleContact.css";

const SingleContact = ({ data, index, onDeleteContact, onUpdateContact }) => {
  const [style, setStyle] = useState({ display: "none" });
  const [loading, setLoading] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "35%",
      position: "relative",
    },
  };
  Modal.setAppElement("#root");
  const [editModalIsOpen, setEditIsOpen] = React.useState(false);

  function openEditModal() {
    setEditIsOpen(true);
  }

  function closeEditModal() {
    setEditIsOpen(false);
  }
  const [deleteModalIsOpen, setDeleteIsOpen] = React.useState(false);

  function openDeleteModal() {
    setDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteIsOpen(false);
  }

  const handleEditContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newEmail = e.target.email.value;
    setTimeout(() => {
      onUpdateContact({ index, newEmail });
      closeEditModal();
      setLoading(false);
    }, 1000);
  };

  const handleDeleteContact = async (index) => {
    setLoading(true);
    setTimeout(() => {
      onDeleteContact(index);
      closeDeleteModal();
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
      className="singleContact-main"
    >
      <div className="singleContact">
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div>
      <div style={style} className="edit-delete">
        <div className="edit-delete-button edit">
          <i onClick={openEditModal} className="edit icon"></i>
        </div>
        <Modal
          isOpen={editModalIsOpen}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <i onClick={closeEditModal} className="editCloseModal close icon"></i>
          <form onSubmit={handleEditContact} className="edit-form ui form">
            <div className="field">
              <label htmlFor="email">Edit email address</label>
              <input
                placeholder="New email address..."
                type="email"
                name="email"
                required
              />
            </div>
            {loading ? (
              <button className="ui primary loading button">Done</button>
            ) : (
              <button type="submit" className="ui button blue">
                Done
              </button>
            )}
          </form>
        </Modal>
        <div className="edit-delete-button delete">
          <i
            // onClick={() => onDeleteContact(index)}
            onClick={openDeleteModal}
            className="trash alternate icon"
          ></i>
          <Modal
            isOpen={deleteModalIsOpen}
            onRequestClose={closeDeleteModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Are you sure you want to delete the item?</h2>
            {loading ? (
              <button className="ui red loading button">Yes</button>
            ) : (
              <button
                onClick={() => {
                  handleDeleteContact(index);
                }}
                className="ui button red"
              >
                Yes
              </button>
            )}
            <button onClick={closeDeleteModal} className="ui button blue">
              No
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
