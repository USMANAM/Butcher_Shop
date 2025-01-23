import axios from "axios";

const API_URL = `${
  import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
}/products/getSubCats`;

export const fetchSubcategories = async (category) => {
  console.log(category);
  try {
    const response = await axios.get(`${API_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
};
