import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import AsyncStorage from "@react-native-async-storage/async-storage";

const initalState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initalState, applyMiddleware(thunk));

export { store };
