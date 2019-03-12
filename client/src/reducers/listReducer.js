

export default (state = {
    lists: []
}, action) => {
    switch (action.type) {
        case "GET_LISTS":
            return {...state, lists: action.lists};
    
        default:
            return state;
    }
};