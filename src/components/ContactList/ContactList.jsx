import React from 'react';
import ContactCard from '../ContactCard/ContactCard'; // Import child component
import { AlertCircle } from 'lucide-react';
import './ContactList.css';

function ContactList({ contacts }) {
  // Show a message if the list is empty
  if (contacts.length === 0) {
    return (
      <div className="no-contacts-found">
        <AlertCircle />
        <h2>No Contacts Found</h2>
        <p>Your search returned no results, or your contact list is empty.</p>
      </div>
    );
  }

  // Render the list of contacts
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
