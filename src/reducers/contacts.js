import { contacts } from '../api/contacts';

// contacts reducer
const contactsReducerDefaultState = contacts;

export default (state = contactsReducerDefaultState, action) => {
    switch (action.type) {
        case 'NEW_CONTACT':
            return [
                ...state,
                action.contact
            ];
        case 'REMOVE_CONTACT':
            return state.filter(({ id }) => id !== action.id)
        case 'UPDATE_CONTACT':
            return state.map((contact) => {
                if (contact.id === action.id) {
                    return {
                        ...contact,
                        ...action.updates
                    };
                } else {
                    return contact
                }
            })
        default:
            return state;
    };
};