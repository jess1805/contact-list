import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import AddContactModal from './components/AddContactModal/AddContactModal.jsx';
import { initialContacts } from './data/contacts.js';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add new contact
  const handleAddContact = (newContact) => {
    const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    setContacts([...contacts, { id: nextId, ...newContact }]);
  };

  // Filter contacts by search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-root">
      <div className="sidebar">
        <Header onAddContactClick={() => setIsModalOpen(true)} />
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <ContactList contacts={filteredContacts} />
      </div>

      <div className="main-content">
        {/* Optional: future right-side area (empty for now) */}
      </div>

      {isModalOpen && (
        <AddContactModal 
          onClose={() => setIsModalOpen(false)} 
          onAddContact={handleAddContact} 
        />
      )}
    </div>
  );
}

export default App;
