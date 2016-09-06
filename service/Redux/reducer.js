import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    user: {
        name: ''
    }
});

export default function rootReducer(state = initialState, action) {
    // switch (action.type) {
    // case GET_COURSE_PROGRESS:
    //     return state.merge({
    //         name: action.username
    //     });
    // case UPDATE_COURSE_PROGRESS:
    //     return state;
    // default:
    //     return state;
    // }
    return state;
}