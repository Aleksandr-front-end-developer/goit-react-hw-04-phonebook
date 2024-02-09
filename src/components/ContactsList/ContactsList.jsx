import { ContactItem } from '../ContactItem/ContactItem';

const ContactsList = ({ contacts, ...otherProps }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} {...otherProps} />
      ))}
    </ul>
  );
};

export default ContactsList;
