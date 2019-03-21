

export default (state = {
    lists: {}
}, action) => {
    switch (action.type) {
        case "GET_LISTS":
        action.lists.forEach(l => state.lists[l.id] = l)
            return {...state, lists: {...state.lists}};
        case "ADD_LIST": 
            return {...state, lists: {...state.lists, [action.list.id]: action.list}}
        case "DELETE_LIST":
        debugger;
        let newLists = {...state.lists}
            delete newLists[action.payload]
            // delete state.lists
            return {...state, lists: newLists}
        case "ADD_ITEM":
        // debugger;
        let newList = {...action.list, items: [...action.list.items, action.item]}
            return {...state, lists: [...state.lists, newList] }
    
        default:
            return state;
    }
};