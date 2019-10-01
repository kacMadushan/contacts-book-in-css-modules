import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';
import groupsReducer from '../reducers/groups';

// create store
export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactsReducer,
            filters: filtersReducer,
            groups: groupsReducer,
        }),
        // redux dev-tool extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};