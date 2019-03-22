

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
        const {[action.payload]: _, ...newLists} = state.lists
            
            return {...state, lists: newLists}
        case "ADD_ITEM":
        const list = state.lists[action.payload.listId]
        // debugger;
        // let newList = {...action.list, items: [...action.list.items, action.item]}
            return {
                lists: 
                    {...state.lists, 
                        [action.payload.listId]: {
                            ...list, 
                            items: list.items.concat(action.payload.item)
                        }
                    }
                }
    
        default:
            return state;
    }
};