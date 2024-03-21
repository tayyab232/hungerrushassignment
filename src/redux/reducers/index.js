import { combineReducers } from "redux";

import authReducer from "./auth.reducer/auth.reducer";
import brandsReducer from "./brands.reducer/brands.reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  brandsReducer: brandsReducer,
});

export default rootReducer;
