

export const getLists = () => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/lists').then(resp => resp.json()).then(lists => dispatch({type: "GET_LISTS", lists}))
    }
}