import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";
const { BASE_URL, ACCOUNT_LIST } = Url;

export const getAccountList = async (data) => {
  return axios
    .get(`${BASE_URL}/${ACCOUNT_LIST}`)
    .then((accountList) =>
      accountList.data.find((item) => item.email == data.email)
    );
};

const login = async (data) => {
  const isExist = await getAccountList(data);
  if (!isExist) {
    return { status: "failed", error: "Email Not Exist" };
  }
  if (isExist.password === data.password) {
    return {
      status: "success",
      error: null,
      data: isExist,
    };
  } else {
    return { status: "failed", error: "Invalid Credentials" };
  }
};

const logout = () => {
  localStorage.clear();
};

export const authService = {
  login,
  logout,
  getAccountList,
};
