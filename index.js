import {createStore} from 'redux'

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK="CAKE_RESTOCKED"

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(){
    return {
        type:CAKE_RESTOCK,
        payload:10
    }
}

//Reducer prevsate, action gives new state
const initalState = {
    numOfCakes: 10
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCK:
            console.log("action",action.payload)
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('intial state',store.getState())
const val = store.subscribe(() => console.log("updates", store.getState()))
//Only with dispatch updates the store object, which is central obj for storing
//dispatch goes to reducer to perform a duty and updates the store
//the dispatch duty or action should be predefined, with type
//with type the reducer knows to check for the action set
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(20))
val()


//holds app state,
//getstate access the state,
//dispatch, changes in store 
//subscribe

console.log("sai")
