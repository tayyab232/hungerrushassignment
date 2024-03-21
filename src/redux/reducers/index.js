import { combineReducers } from "redux";

import authReducer from "./auth.reducer/auth.reducer";
import brandsReducer from "./brands.reducer/brands.reducer";
import subBrandsReducer from "./subBrands.reducer/subBrands.reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  brandsReducer: brandsReducer,
  subBrandsReducer: subBrandsReducer,
});

export default rootReducer;
