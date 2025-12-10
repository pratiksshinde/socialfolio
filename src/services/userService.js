
import { toast } from "sonner";
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

export const getUserProfile = async () => {
  try {
    const response = await Instance.get(`/resume/profile`);
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await Instance.post("/user/login", { email, password });
    console.log(response.data)
    toast.message(response.message);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    throw error?.response?.data || error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await Instance.post('/user/register', { username, email, password });
    toast.message(response.message);
    return response.data;
  } catch (error) {
    toast.warning(error.message);
    throw error?.response?.data || error;
  }
};

export const logout = async () =>{
  try{
    const response = await Instance.post('/user/logout');
    return response.data;
  }catch (error){
    throw error?.response?.data || error;
  }
}

export const createPost = async (content) =>{
  try{
    const response = await Instance.post('/user/post',{content});
    return response.data;
  }catch(error){
    throw error?.response?.data || error;
  }
}