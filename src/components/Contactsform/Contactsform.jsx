import { useState } from 'react';

export const Contactsform = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      onSubmit({ name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          value={name}
          className="form__input"
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Namber
        <input
          onChange={handleChange}
          value={number}
          className="form__input"
          type="tel"
          name="number"
          required
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};
