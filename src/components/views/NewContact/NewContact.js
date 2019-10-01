import React from 'react';
import { connect } from 'react-redux';
import { newContact } from '../../../actions/contacts';
import Heading from '../../Heading/Heading';
import ContactForm from '../../ContactForm/ContactForm';

const NewContact = ({ dispatch, history }) => (
    <div>
        <Heading name="New Contact" />
        <ContactForm onSubmit={(contact) => {
            dispatch(newContact(contact))
            history.push('/');
        }} />
    </div>
);

export default connect()(NewContact);