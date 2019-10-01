import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectContacts from '../../../selectors/contacts';
import Searchbar from '../../Searchbar/Searchbar';
import Heading from '../../Heading/Heading';
import ContactList from '../../ContactList/ContactList';

const Contacts = ({ contacts }) => {
    return (
        <div>
            <Searchbar />
            <Heading name="All Contacts" />
            <ContactList
                contacts={contacts}
            />
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const mapStateToProps = (state) => {
    return {
        contacts: selectContacts(state.contacts, state.filters)
    };
};

export default connect(mapStateToProps)(Contacts);