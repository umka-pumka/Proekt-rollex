import axios from "./index"; 

const service = {
  getAllProducts: async () => {
    try {
      const response = await axios.get("/posts");
      return response.data; 
    } catch (error) {
      throw new Error("Не удалось загрузить данные");
    }
  },
};

export default service;
