import { contacts } from '../../api/contacts';
import contactsReducer from '../../reducers/contacts';

test('should set default state', () => {
    const state = contactsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(contacts);
});

// test('should remove contact by id', () => {
//     const action = {
//         type: 'REMOVE_CONTACT',
//         id
//     };
// })