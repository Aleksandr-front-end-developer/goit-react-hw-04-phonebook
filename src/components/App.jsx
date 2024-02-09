import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { Contactsform } from './Contactsform/Contactsform';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './style.scss';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsStorage) setContacts(contactsStorage);
  }, []);

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    setContacts(prev => [...prev, { ...data, id: nanoid() }]);
  };

  const handleFilter = value => {
    setFilter(value);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <Contactsform contacts={contacts} onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} value={filter} />
      <ContactsList
        contacts={filterContacts()}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};
