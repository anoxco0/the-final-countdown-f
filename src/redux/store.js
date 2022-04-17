import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addTeacherReducer } from "./addTeacher/reducer";
import { loginReducer } from "./login/reducer";
import { signupReducer } from "./signup/reducer";


const composeEnhancers = 
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer,
    addteacher:addTeacherReducer,
})

export const store = createStore(rootReducer, enhancer);