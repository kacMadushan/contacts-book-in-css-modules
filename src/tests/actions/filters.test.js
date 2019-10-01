import { setContactFilter } from '../../actions/filters';

test('should setup contact name filter action object', () => {
    const setDate = 'full name'
    const action = setContactFilter(setDate);
    expect(action).toEqual({
        type: 'SET_CONTACT_FILTER',
        text: setDate
    });
});

test('should setup set contact filter default value', () => {
    const action = setContactFilter();
    expect(action).toEqual({
        type: 'SET_CONTACT_FILTER',
        text: ''
    });
});