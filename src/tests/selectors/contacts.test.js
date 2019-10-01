import selectContacts from '../../selectors/contacts';

const contacts = [
    {
        id: '1',
        avatar: '',
        fullName: 'Alex',
        mobile: '',
        email: '',
        groupBy: ''
    },
    {
        id: '2',
        avatar: '',
        fullName: 'Ben',
        mobile: '',
        email: '',
        groupBy: ''
    },
];

test('should filter by text value in contact name', () => {
    const filters = {
        text: 'e'
    };
    const result = selectContacts(contacts, filters);
    expect(result).toEqual(contacts);
});
