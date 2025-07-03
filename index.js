import {createStore, combineReducers, applyMiddleware} from 'redux'

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK="CAKE_RESTOCKED"
const ICECREAM_ORDERED="ICECREAM_ORDERED"
const ICECREAM_RESTOCK="ICECREAM_RESTOCK"

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function orderIcecream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

function restockIcecream() {
    return {
        type: ICECREAM_RESTOCK,
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
const initalCakeState = {
    numOfCakes: 10
}

const initalIcecreamState = {
    numOfIceCreams: 10
}

const cakeReducer = (state = initalCakeState, action) => {
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

const iceCreamReducer = (state = initalIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCK:
            console.log("action",action.payload)
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams+action.payload
            }
        default:
            return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer)
console.log('intial state',store.getState())
//Return value of subscibe is unsubscribe
const unsubscribe = store.subscribe(() => console.log("updates", store.getState()))
//Only with dispatch updates the store object, which is central obj for storing
//dispatch goes to reducer to perform a duty and updates the store
//the dispatch duty or action should be predefined, with type
//with type the reducer knows to check for the action set
store.dispatch(orderCake())
store.dispatch(restockCake(20))
store.dispatch(orderIcecream())
store.dispatch(restockIcecream(2))
unsubscribe()


//holds app state,
//getstate access the state,
//dispatch, changes in store 
//subscribe

console.log("sai")
