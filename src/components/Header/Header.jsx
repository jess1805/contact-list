import React from 'react';
import { Plus, UserPlus } from 'lucide-react';
import './Header.css'; 

function Header({ onAddContactClick }) {
  return (
    <header className="header">
      <h1 className="header-title">
        <UserPlus />
        Contact List
      </h1>
      <button
        onClick={onAddContactClick}
        className="add-contact-btn"
      >
        <Plus />
        Add Contact
      </button>
    </header>
  );
}

export default Header;
