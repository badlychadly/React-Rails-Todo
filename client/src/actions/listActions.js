

export const getLists = () => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/lists').then(resp => resp.json()).then(lists => dispatch({type: "GET_LISTS", lists}))
    }
}

export const deleteList = (list) => {
    return dispatch => {
        return fetch(`http://10.0.0.99:3001/lists/${list.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(list)
          })
          .then(resp => {
            dispatch({type: "DELETE_LIST", list})
          })
    }
}

export const addList = (listData) => {
    return dispatch => {
        return  fetch('http://10.0.0.99:3001/lists', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(listData)
        })
        .then(resp => resp.json())
        .then(list => dispatch({type: "ADD_LIST", list}))
    }
}


export const addItem = (list, itemData) => {
    return dispatch => {
        return fetch(`http://10.0.0.99:3001/lists/${list.id}/items`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        .then(item => {
            // debugger;
            dispatch({type: "ADD_ITEM", list, item})
        })
    }
}