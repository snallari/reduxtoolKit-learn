import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import axios from 'axios'
//Intial state, actions, reducers - step1
const initialState = {
    loading: false,
    error: "",
    users: []
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEDED = "FETCH_USERS_SUCCEDDED"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

//ACTIONS
const fetchUsersRequest = (loading) => {
    return {
        type: FETCH_USERS_REQUESTED,
        payload: loading
    }
}
const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEDED,
        payload: users
    }
}
const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}
//REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state, loading: true
            }
        case FETCH_USERS_SUCCEDED:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_REQUESTED:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//Store
const fetchUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest(true)); // Dispatch a "pending" action
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          const data = await response.json();
          console.log("data", data)
          dispatch(fetchUsersSucceeded(data)); // Dispatch a "success" action
        } catch (error) {
          dispatch(fetchUsersFailed(error)); // Dispatch a "failure" action
        }
      };
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())

