import axios from "axios";

const userData = async (pageNumber: number) => {
  try {
    const response = await axios.get(`https://randomuser.me/api?page=${pageNumber}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error)
  }
}

export default userData;