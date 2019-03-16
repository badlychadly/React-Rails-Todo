

export default (state = {
    lists: []
}, action) => {
    switch (action.type) {
        case "GET_LISTS":
            return {...state, lists: action.lists};
        case "ADD_LIST": 
            return {...state, lists: [...state.lists, action.list]}
        case "DELETE_LIST":
            return {...state, lists: state.lists.filter(list => list.id !== action.list.id)}
    
        default:
            return state;
    }
};