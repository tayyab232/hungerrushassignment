import axios from "axios";
import { Url } from "../../system/constants/GlobalConstants";

const { BRANDS, BASE_URL } = Url;

const getBrands = async () => {
  const response = await axios.get(`${BASE_URL}/${BRANDS}`);

  return response.data;
};
const updateBrands = async (data) => {
  return axios
    .put(`${BASE_URL}/${BRANDS}/${data.id}`, { ...data })
    .then(() => getBrands(data));
};

export const brandsServices = {
  getBrands,
  updateBrands,
};
