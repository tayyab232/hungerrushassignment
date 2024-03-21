import { subBrandsConstants } from "../../../system/constants/GlobalConstants";

const initialState = {
  subBrandsList: [],
};

const subBrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case subBrandsConstants.SUB_GET_BRANDS:
      return {
        ...state,
        subBrandsList: action.payload,
      };
    case subBrandsConstants.SUB_UPDATE_BRANDS:
      return {
        ...state,
        subBrandsList: action.payload,
      };

    default:
      return state;
  }
};

export default subBrandsReducer;
