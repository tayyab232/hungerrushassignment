import { brandsConstants } from "../../../system/constants/GlobalConstants";

const initialState = {
  brandsList: [],
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case brandsConstants.GET_BRANDS:
      return {
        ...state,
        brandsList: action.payload,
      };
    case brandsConstants.UPDATE_BRANDS:
      return {
        ...state,
        brandsList: action.payload,
      };

    default:
      return state;
  }
};

export default brandsReducer;
