
import Instance from "./api";

export const uploadResume = async (formData) => {
  try {
    const response = await Instance.post("/resume/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await Instance.get(`/resume/${userId}`);
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await Instance.post("/user/login", { email, password });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await Instance.post('/user/register', { username, email, password });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};



