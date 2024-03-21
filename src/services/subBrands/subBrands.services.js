import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";

const { BRANDS_SUB_LIST, BASE_URL } = Url;

const getSubBrands = async () => {
  const response = await axios.get(`${BASE_URL}/${BRANDS_SUB_LIST}`);
  return response.data;
};
const updateSubBrands = async (data) => {
  return axios
    .put(`${BASE_URL}/${BRANDS_SUB_LIST}/${data.id}`, { ...data })
    .then(() => getSubBrands(data));
};

export const subBrandsServices = {
  getSubBrands,
  updateSubBrands,
};
