import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { reducer } from './Home/reducer.home';
const thunk = (store)=>(next)=>(action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }
    next(action);
    
}
const middleware = applyMiddleware(thunk)
export const store = createStore(reducer, middleware)
