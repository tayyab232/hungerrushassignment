import { brandsServices } from "../../../services/brands/brands.services";
import { brandsConstants } from "../../../system/constants/GlobalConstants";
import { ToastifyUtilities } from "../../../system/Toastify/toastifyUtilities";

export const getBrands = (data) => {
  return async (dispatch) => {
    try {
      const response = await brandsServices.getBrands(data);
      if (response) {
        dispatch({
          type: brandsConstants.GET_BRANDS,
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

export const updateBrands = (data) => {
  return async (dispatch) => {
    try {
      const response = await brandsServices.updateBrands(data);
      if (response) {
        dispatch({
          type: brandsConstants.UPDATE_BRANDS,
          payload: response,
        });
        ToastifyUtilities.showSuccess("Brands Updated Successfully");
      } else {
        ToastifyUtilities.showError("An Error Occured");
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const brandsActions = {
  getBrands,
  updateBrands,
};
