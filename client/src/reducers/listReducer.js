

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
        case "ADD_ITEM":
        // debugger;
        let newList = {...action.list, items: [...action.list.items, action.item]}
            return {...state, lists: [...state.lists, newList] }
    
        default:
            return state;
    }
};