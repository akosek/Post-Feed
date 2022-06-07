import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import posts, { TPostState } from "./ducks/posts";

const appReducer = combineReducers({
  posts,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
