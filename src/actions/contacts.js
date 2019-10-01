import uuid from 'uuid';
const avatarUrl = './images/avatar.png';
// contacts action create

// NEW_CONTACT
export const newContact = ({ fullName = '', mobile = '', email = '', groupBy = '' } = {}) => ({
    type: 'NEW_CONTACT',
    contact: {
        id: uuid(),
        avatar: avatarUrl,
        fullName,
        mobile,
        email,
        groupBy,
    }
});

// UPDATE_CONTACT
export const updateContact = (id, updates) => ({
    type: 'UPDATE_CONTACT',
    id,
    updates
});

// REMOVE_CONTACT
export const removeContact = ({ id } = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});