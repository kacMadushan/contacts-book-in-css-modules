// filters reducer
const filtersReducerDefaultState = {
    text: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CONTACT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    };
};