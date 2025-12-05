import Instance from "./api"

export const getProfile = async ({username})=>{
    try{
    const response = await Instance.get("/public/getProfile" ,{
        params: {username}
    });
    return response.data;
    }catch(error){
        throw error?.response?.data || error;
    }
}
export const getUsers = async (search) => {
  try {
    const response = await Instance.get("public/get_users", {
      params: { search }
    });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};
