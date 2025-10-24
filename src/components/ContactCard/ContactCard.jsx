import React from 'react';
import { User, Phone, Mail } from 'lucide-react';
import './ContactCard.css';

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-avatar">
        <User />
      </div>
      <div className="contact-info">
        <h2>{contact.name}</h2>
        <div className="contact-detail">
          <Mail />
          <p>{contact.email}</p>
        </div>
        <div className="contact-detail">
          <Phone />
          <p>{contact.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

