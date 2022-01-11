//reducer is a function which takes action as a parameter and modifies state.

const initialState = {
    profileInfo: {}
};

const loginReducer = (state = initialState,action) => {
switch (action.type) {
        case 'SAVE_PROFILE_DATA':
            return {
                ...state,
                profileInfo: action.payload
            }
        default:
            return state
    }
}

export default loginReducer
