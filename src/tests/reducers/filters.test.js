import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: ''
    });
});

test('should filter by contact name value', () => {
    const text = 'full name';
    const action = { type: 'SET_CONTACT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});