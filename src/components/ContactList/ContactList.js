import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => {
    let showContacts = null;
    const contactList = contacts.map((contact) => <ContactListItem key={contact.id} {...contact} />);
    showContacts = contacts.length > 0 ? contactList : <p>No Contacts</p>;

    return (
        <ul className="list-unstyled">{showContacts}</ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default ContactList;