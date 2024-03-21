export const UserActionType = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Details: "details",
};
export const actionFor = {
  USER_PAGE: "userPage",
  USER_GROUP_PAGE: "userGroupPage",
};
export const actionTypeConstant = {
  Deposite: "deposite",
  Withdraw: "withdraw",
};

export const categoryList = [
  { id: 2, label: "Brand", value: "brand" },
  { id: 3, label: "Group", value: "group" },
  { id: 4, label: "Store", value: "store" },
];

export const genderList = [
  { id: 2, label: "Male", value: "Male" },
  { id: 3, label: "Female", value: "Female" },
  { id: 4, label: "Other", value: "Other" },
];
export const actionType = [
  { id: 2, label: "Deposite", value: "deposite" },
  { id: 3, label: "Withdraw", value: "withdraw" },
];

export const accountConstants = {
  AccountCreated: "AccountCreated",
  GetAccounts: "GetAccounts",
  DeleteAccount: "DeleteAccount",
  UpdateAccount: "UpdateAccount",
};

export const userGroupConstants = {
  USERGROUP_CREATED: "UserGroupCreated",
  GET_USERGROUP: "GetUserGroup",
  DELETE_USERGROUP: "DeleteUserGroup",
  UPDATE_USERGROUP: "UpdateUserGroup",
};
export const subBrandsConstants = {
  SUB_Brands_CREATED: "SubBrandsCreated",
  SUB_GET_BRANDS: "SubGetBrands",
  SUB_DELETE_BRANDS: "SubDeleteBrands",
  SUB_UPDATE_BRANDS: "SubUpdateBrands",
};
export const brandsConstants = {
  Brands_CREATED: "BrandsCreated",
  GET_BRANDS: "GetBrands",
  DELETE_BRANDS: "DeleteBrands",
  UPDATE_BRANDS: "UpdateBrands",
};
export const userConstants = {
  USER_CREATED: "UserCreated",
  GET_USER: "GetUser",
  DELETE_USER: "DeleteUser",
  UPDATE_USER: "UpdateUser",
};
export const modalConstants = {
  ModalOpen: "modalOpen",
  SidebaroOpen: "sideBarOpen",
};

export const authConstants = {
  Failed: "failed",
  Success: "success",
};
export const status = {
  Failed: "failed",
  Success: "success",
};
export const Url = {
  BASE_URL: process.env.REACT_APP_BASE_API_URL,
  ACCOUNT_LIST: "AccountList",
  BRANDS_SUB_LIST: "BrandsSubList",
  BRANDS: "Brands",
};

export const localStorageConstants = {
  CURRENT_USER: "currentUser",
};
export const brandActionsConstants = {
  BRANDS_SUB: "BrandsSub",
  BRANDS: "Brands",
};
