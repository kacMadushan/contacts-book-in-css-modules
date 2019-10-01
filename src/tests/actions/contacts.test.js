import { newContact, updateContact, removeContact } from '../../actions/contacts';

test('should setup add new contact action object', () => {
    const newContactData = {
        fullName: 'Harry Potter',
        mobile: '0147852',
        email: 'harry@gmail.com',
        groupBy: '1'
    }
    const action = newContact(newContactData);
    expect(action).toEqual({
        type: 'NEW_CONTACT',
        contact: {
            ...newContactData,
            id: expect.any(String),
            avatar: expect.any(String)
        }
    });
});

test('should set add new contact action object default value', () => {
    const action = newContact();
    expect(action).toEqual({
        type: 'NEW_CONTACT',
        contact: {
            id: expect.any(String),
            avatar: expect.any(String),
            fullName: '',
            mobile: '',
            email: '',
            groupBy: ''
        }
    });
});

test('should setup remove expense action object', () => {
    const action = removeContact({ id: 'f5a8' });
    expect(action).toEqual({
        type: 'REMOVE_CONTACT',
        id: 'f5a8'
    });
});

test('should setup update contact action object', () => {
    const action = updateContact('f5a8', { name: 'Update name' });
    expect(action).toEqual({
        type: 'UPDATE_CONTACT',
        id: 'f5a8',
        updates: {
            name: 'Update name'
        }
    });
});