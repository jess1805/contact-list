import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddContactModal.css';

function AddContactModal({ onClose, onAddContact }) {
  // State for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }
    setError('');
   
    onAddContact({ name, email, phone });
    onClose(); 
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose} 
    >
      {/* Modal Content */}
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X />
        </button>
        <h2>Add New Contact</h2>
        
        {error && (
          <div className="modal-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="form-btn cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-btn submit"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContactModal;
