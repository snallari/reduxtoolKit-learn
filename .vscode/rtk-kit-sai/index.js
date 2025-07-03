import store from "./app/store.js";
import { actions as cakeActions } from "./features/cake/cakeslice.js";
import { actions as iceCreamActions } from "./features/icecream/icecreamSlice.js";

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(2));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(10));
unsubscribe()