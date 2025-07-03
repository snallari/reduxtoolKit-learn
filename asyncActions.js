import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import axios from 'axios'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import axios from 'axios'

const initialState = {
    loading: false,
    error: "",
    users: []
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEDED = "FETCH_USERS_SUCCEDDED"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

// ACTIONS
const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUESTED
})

const fetchUsersSucceeded = (users) => ({
    type: FETCH_USERS_SUCCEDED,
    payload: users
})

const fetchUsersFailed = (error) => ({
    type: FETCH_USERS_ERROR,
    payload: error
})

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEDED:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_ERROR:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

// ASYNC THUNK
const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest())
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
            const data = response.data
            dispatch(fetchUsersSucceeded(data))
        } catch (error) {
            dispatch(fetchUsersFailed(error.message))
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())