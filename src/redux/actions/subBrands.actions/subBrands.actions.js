import { subBrandsServices } from "../../../services/subBrands/subBrands.services";
import { subBrandsConstants } from "../../../system/constants/GlobalConstants";
import { ToastifyUtilities } from "../../../system/Toastify/toastifyUtilities";

export const getSubBrands = (data) => {
  return async (dispatch) => {
    try {
      const response = await subBrandsServices.getSubBrands(data);
      if (response) {
        dispatch({
          type: subBrandsConstants.SUB_GET_BRANDS,
          payload: response,
        });
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const updateSubBrands = (data) => {
  return async (dispatch) => {
    try {
      const response = await subBrandsServices.updateSubBrands(data);
      if (response) {
        dispatch({
          type: subBrandsConstants.SUB_UPDATE_BRANDS,
          payload: response,
        });
        ToastifyUtilities.showSuccess("Sub Brand Updated Successfully");
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const subBrandsActions = {
  getSubBrands,
  updateSubBrands,
};
