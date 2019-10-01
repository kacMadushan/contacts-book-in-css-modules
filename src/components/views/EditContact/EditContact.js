import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateContact } from '../../../actions/contacts';
import ContactForm from '../../ContactForm/ContactForm';

const EditContact = (props) => {
    return (
        <div>
            <ContactForm
                contact={props.contact}
                onSubmit={(contact) => {
                    props.dispatch(updateContact(props.contact.id, contact));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    contact: state.contacts.find((contact) => contact.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditContact);