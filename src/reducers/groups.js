import { groups } from '../api/groups';

// groups reducer
const groupsReducerDefaultState = groups;

export default (state = groupsReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};