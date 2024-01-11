const initialState = {
    users: [],
    loadingStatus: "Connecting..."
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADING":
            return {
                ...state,
                loadingStatus: "Loading..."
            }
        case "USER_ADD":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default: return state
    }
}
export default reducer