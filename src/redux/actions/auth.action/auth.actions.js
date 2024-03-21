import { LoginConstants } from "../../../system/constants/LoginConstants";
import { authService } from "../../../services/auth/auth.services";
import { authConstants } from "../../../system/constants/GlobalConstants";
import { ToastifyUtilities } from "../../../system/Toastify/toastifyUtilities";
import {
  getCurrentUserLocalStorage,
  setCurrentUserLocalStorage,
} from "../../../system/storageUtilites/storageUtilities";

export const login = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LoginConstants.LOADING,
        payload: true,
      });
      const response = await authService.login(data);
      if (response.status === authConstants.Success) {
        setCurrentUserLocalStorage(response);
        const currentUser = getCurrentUserLocalStorage();

        dispatch({
          type: LoginConstants.Login,
          payload: { data: response.data, localUser: currentUser },
        });
        dispatch(authActions.getLocalUser());

        ToastifyUtilities.showSuccess("Account Login Successfully");
        navigate("/");
        dispatch({
          type: LoginConstants.LOADING,
          payload: false,
        });
      } else {
        ToastifyUtilities.showError(response.error);
        dispatch({
          type: LoginConstants.LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
};

export const getLocalUser = () => {
  return async (dispatch) => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    dispatch({
      type: LoginConstants.CURRENT_USER,
      payload: localUser,
    });
  };
};

export const authActions = {
  login,
  getLocalUser,
};
