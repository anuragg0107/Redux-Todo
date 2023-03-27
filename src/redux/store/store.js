// import {legacy_createStore,compose,applyMiddleware} from "redux"
// import thunk from "redux-thunk"
// import rootReducer from "../reducers/index"

// const store=legacy_createStore(rootReducer,compose(applyMiddleware(thunk),
// window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f))

// export default store


import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
