import {combineReducers, createStore} from "redux";
import valueReducer from "../Reducers/value-reducer";
import countReducer from "../Reducers/count-reducer";


const reducers = combineReducers({
    value: valueReducer, // change name on Setting Reucer
    count: countReducer // display reducer
})

export let store = createStore(reducers)

export type RootAppStateType = ReturnType<typeof reducers>