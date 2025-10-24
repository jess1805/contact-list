import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search contacts by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <Search className="search-icon" />
    </div>
  );
}

export default SearchBar;
