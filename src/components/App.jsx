import { nanoid } from 'nanoid';
import { Component } from 'react';

import Contactsform from './Contactsform/Contactsform';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './style.scss';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({
        contacts: contacts,
      });
    } else {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = data => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { ...data, id: nanoid() }],
      };
    });
  };
  handleFilter = value => {
    this.setState({
      filter: value,
    });
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  filterContacts = () => {
    if (this.state.filter !== '') {
      return this.state.contacts.filter(item =>
        item.name
          .trim()
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase())
      );
    }
    return this.state.contacts;
  };

  render() {
    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <Contactsform
          contacts={this.state.contacts}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} value={this.state.filter} />
        <ContactsList
          contacts={this.filterContacts()}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
